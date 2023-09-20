---
sidebar_position: 2
---

# How It Works

Learn how Divvi Up works and how it protects privacy.

## Breakdown

Divvi Up ingests measurements and aggregates them, while protecting the privacy
of each individual measurement. This can be broadly broken down into several
steps, described in the following sections.

<!-- TODO(inahga): Consider making this a more detailed `mermaid` diagram -->

![](../static/how-it-works.png#gh-dark-mode-only)
![](../static/how-it-works-light.jpg#gh-light-mode-only)

See the [Distributed Aggregation Protocol (DAP)][DAP] for a highly detailed
specification of the protocol that underpins Divvi Up.

### Step 0: Subscriber sets up Divvi Up

Subscribers are users of Divvi Up, such as app developers, who wish to collect
quantitative measurements about their end-user applications.

The subscriber chooses a DAP client library, which is used to interact with any
DAP-compatible measurements aggregator, such as the aggregators provided by
Divvi Up and its partners. Client libraries for [Rust
(janus_client)][janus_client] and [TypeScript (divviup-ts)][divviup-ts] are
available.

For each measurement the subscriber wishes to aggregate, the subscriber creates
a task. A task encodes metadata about how the measurement will be made, which
aggregators will be used, and which aggregation function to use. The task's
parameters are shared with both aggregators.

### Step 1: Client generates measurements

The subscriber writes and deploys app functionality that takes measurements
corresponding to each task. They invoke a DAP client library and provide some of
the task parameters to it, such as the task identifier, measurement type, and
the aggregator servers being used.

For each measurement, the subsequent steps are performed.

### Step 2: Client shards the measurement

The app uses the DAP client library to randomly shard the measurement into two
parts, known as report shares. One report share is for the leader aggregator,
and the other for the helper aggregator.

Each aggregator advertises a public key corresponding to its private key. The
client library encrypts each share with the respective aggregator's public key.

### Step 3: Client sends shares to the aggregators

The DAP client library sends each report share via HTTPS to the leader and
helper aggregators.

Aggregators reject out-of-range or invalid measurements, as defined in the task
parameters. This is done without knowledge of the original measurement.

Each aggregator is operated by different organizations. Often, Divvi Up will act
as the leader, while another organization operates as a helper.

<!-- TODO(#11): link BYOH guide here -->

Crucially, these organizations are non-colluding. They don't directly share
report shares or otherwise conspire to defeat the protocol. DAP guarantees that
as long as at least one of the aggregators is operated honestly, the privacy of
each individual measurement will be protected.

If you don't wish to use any of the already-available third-party organizations
that Divvi Up partners with, you can self-host your own helper aggregator.

:::note

Both shares are actually sent to the leader aggregator. The leader relays the
helper's report share to the helper. Because the helper's report share is
encrypted to the helper, the leader cannot read it and the non-collusion
property is preserved.

This is done to simplify client library implementation, reduce the number of
client network round-trips, and reduce the operational requirements of the
helper.

:::

### Step 4: Aggregators perform aggregation

Both aggregators work together to compute an aggregate across a batch of report
shares, without revealing the report share to each other and without any
knowledge of the originally submitted measurement.

The principle behind this is [multi-party computation][MPC]. The MPC protocol is
described in DAP and the cryptography involved is described in [Verifiable
Distributed Aggregation Functions (VDAF)][VDAF].

At the end of the process, each aggregator will have computed a share of the
overall aggregate. Neither share reveals information about the final aggregate.

Each aggregator stores its aggregate share until the next step.

### Step 5: Subscriber collects aggregate measurements

The subscriber operates a collector, which queries each aggregator to collect
the aggregate shares. Depending on the query type, this could be a query over a
time interval, or for an arbitrary batch of reports.

Aggregates often aren't available immediately, depending on the measurement
type. The collector will poll the aggregator until it's ready.

Each aggregate share is encrypted to the collector. The collector combines the
aggregate shares, yielding the aggregate result, the number of reports included
in the result, and the time interval that the result spans.

<!-- TODO(https://github.com/divviup/janus-ops/issues/1005): we should make
mention of the adapters we come up with here. -->

Off-the-shelf collectors that more elegantly handle the collection process and
presentation of data are currently in development.

:::note

As with the upload process, a collector does not directly talk to both
aggregators. Instead the helper's aggregate share is relayed through the leader.
Because each share is encrypted to the collector, the leader cannot read the
aggregate shares or reconstitute the aggregate.

:::

[DAP]: https://datatracker.ietf.org/doc/draft-ietf-ppm-dap/
[MPC]: https://en.wikipedia.org/wiki/Secure_multi-party_computation
[VDAF]: https://datatracker.ietf.org/doc/draft-irtf-cfrg-vdaf/
[divviup-ts]: https://github.com/divviup/divviup-ts
[janus_client]: https://crates.io/crates/janus_client
