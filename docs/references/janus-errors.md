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

### Collection Job Abandoned

A Janus leader aggregator returns this error when it abandons a collection job.
The leader has stopped processing the job. The job can no longer be collected,
and any polling attempts should stop.

This can happen if the paired helper aggregator cannot be contacted. If you are
self-hosting a helper aggregator for the collection job's task, check that it is
working correctly and reachable.

Rarely, this error indicates a bug in Janus.

You should contact the Janus operators for assistance.
