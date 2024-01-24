# Janus Errors

This reference provides a list of errors that you might encounter when
interacting with a Janus aggregator.

## DAP Errors

Most errors that Janus return are defined in DAP. A DAP error looks something
like this:

```json
{
  "type": "urn:ietf:params:ppm:dap:error:missingTaskID",
  "title": "HPKE configuration was requested without specifying a task ID.",
  "status": 400
}
```

The `type` field defines a URN that is defined in the [DAP specification][1].

[1]: https://www.ietf.org/archive/id/draft-ietf-ppm-dap-07.html#name-errors

## Non-DAP Errors

Some errors that Janus encounter are not defined in DAP. A list of these errors
and troubleshooting techniques follows.

### Aggregation Job Deleted

This error occurs if a Janus helper receives a request to initialize or
continue an aggregation job that has been deleted.

The [DAP specification][agg-job-deletion] states that if a leader must abandon
an aggregation job, it should delete that resource in the helper to let it clean
up its resources. The Janus leader does this, and the Janus helper supports
`DELETE` requests on an aggregation job URI. Deleted aggregation jobs may not
be acted upon further and any further attempts to run that job will fail.

[agg-job-deletion]: https://datatracker.ietf.org/doc/html/draft-ietf-ppm-dap-09#name-helper-continuation

### Collection Job Abandoned

A Janus leader aggregator returns this error when it abandons a collection job.
The leader has stopped processing the job. The job can no longer be collected,
and any polling attempts should stop.

This can happen if the paired helper aggregator cannot be contacted. If you are
self-hosting a helper aggregator for the collection job's task, check that it is
working correctly and reachable.

Rarely, this error indicates a bug in Janus.

You should contact the Janus operators for assistance.
