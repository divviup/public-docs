# Emulating Categorical Histograms with DAP draft-04

The Prio3Histogram VDAF has changed between drafts 04 and 07 of DAP. Initially,
it provided the functionality of a conventional histogram of a continuous
variable. As of draft-07, its API has changed to be more flexible, supporting
other use cases like categorical variables, multidimensional histograms, etc.
This guide covers how to emulate this behavior and use Prio3Histogram as of DAP
draft-04 to count occurrences of different values of a categorical variable.
This is only applicable to deployments using older versions of the protocol;
newer deployments using draft-07 or later can disregard this guide.

## Background

### Prio3Histogram, DAP draft-04

This version uses the [definition of Prio3Histogram from VDAF
draft-05](https://www.ietf.org/archive/id/draft-irtf-cfrg-vdaf-05.html#name-prio3histogram).
The VDAF has one parameter, `buckets`, which is a list of integers in ascending
order. The measurement is an integer, which gets compared to each value in the
`buckets` parameter.

Measurements are encoded into a vector that has a 1 in one element and a 0
elsewhere. The length of the encoded vector is one more than the length of the
`buckets` parameter. The encoding procedure divides the number line into
intervals, separated at the numbers in the `buckets` parameter, and assigns each
element of the encoded measurement vector to one of the intervals, in increasing
order. Then, for any measurement, the interval that contains that measurement
value is identified, the corresponding vector element is set to 1, and the rest
are set to 0. Each interval includes its maximum boundary value and excludes its
minimum boundary value. In particular, if the measurement is less than or equal
to `buckets[0]`, then the output is `<1, 0, 0, 0, ... 0>`. If the measurement is
greater than `buckets[0]` and less than or equal to `buckets[1]`, then the
output is `<0, 1, 0, 0, ... 0>`. If the measurement is greater than
`buckets[len(buckets) - 1]`, then the output is `<0, 0, 0, ... 0, 1>`.

### Prio3Histogram, DAP draft-07

This version uses the [definition of Prio3Histogram from VDAF
draft-07](https://www.ietf.org/archive/id/draft-irtf-cfrg-vdaf-07.html#name-prio3histogram).
The vdaf has two parameters, `length` and `chunk_length`, both positive
integers. The measurement is an integer between 0 and `length - 1`.

As before, measurements get encoded into a vector , such that one vector element
is 1, and the rest are 0. The length of the encoded vector is equal to the
`length` parameter (the `chunk_length` parameter is not relevant to measurement
encoding). In this case, the encoding procedure is much simpler. The measurement
is used as an index into the encoded vector, and the element that the index
points to is set to 1.

## Solution

In order to emulate a categorical histogram using DAP draft-04, we will do some
additional measurement pre-processing, and craft a `buckets` list parameter that
aligns with this preprocessing. If our categorical variable has `n` levels, then
we will map each level to one of `n` different numbers, and provide that number
to the `Prio3Histogram` measurement sharding function.

In order to have the VDAF produce `n` different counters, we need to provide a
`buckets` VDAF parameter with length `n - 1`. Additionally, it must map each of
our remapped input numbers to a different bucket interval. Since measurements
equal to a bucket boundary value get placed in the bucket to the left, and
measurements between `buckets[len(buckets) - 1]` and positive infinity get
placed in the last bucket, we can simply set `buckets` to the first `n - 1` of
our remapped numbers.

Concretely, let us use a sequence starting at zero for our remapped numbers.
Then, we will remap our categorical value to `0` through `n - 1` to produce a
measurement for the VDAF. The `buckets` VDAF parameter will be
`[0, 1, 2, ... n - 2]`. The aggregate results produced by the VDAF will be
vectors of `n` numbers, corresponding to the different levels of our original
categorical value, in the order in which they were mapped to `0` through
`n - 1`.

For example, if we want to make a categorical histogram of the letters "A", "B",
"C", and "D", we would remap measurements using the following lookup table, and
instantiate Prio3Histogram with `buckets = [0, 1, 2]`.

|Original measurement|Remapped measurement|
|---|---|
| A | 0 |
| B | 1 |
| C | 2 |
| D | 3 |

If we get an aggregate result of "7, 15, 1, 29", that means there were seven "A"
measurements, fifteen "B" measurements, etc.

### Multidimensional Histograms

This same strategy can be used for multidimensional histograms. Instead of
remapping a single categorical variable to a number, you would instead define a
mapping from a tuple of all input variables to one number.

For example, a multidimensional histogram of two categorical variables, with
three levels each, could be implemented using the lookup table below, and
by instantiating Prio3Histogram with `buckets = [0, 1, 2, 3, 4, 5, 6, 7]`

|Original measurement|Remapped measurement|
|------|---|
| A, X | 0 |
| A, Y | 1 |
| A, Z | 2 |
| B, X | 3 |
| B, Y | 4 |
| B, Z | 5 |
| C, X | 6 |
| C, Y | 7 |
| C, Z | 8 |
