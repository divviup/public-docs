---
toc_max_heading_level: 4
---

# Operational Metrics

Observe how Divvi Up is working.

## Upload Metrics

Tasks provide metrics on reports uploaded to them. Upload metrics are reported
to Divvi Up via the task's leader aggregator, and represent the leader's ability
to process the reports.

Metrics are monotonic counters that last the lifetime of the task.

:::note

This is a new feature. Tasks created before February 2024 will start counting
from when the feature was implemented, rather than the lifetime of the task.

:::

### Successful Uploads

Indicates reports successfully ingested by the leader. Reports contributing to
this count are eligible for aggregation and collection. Use the rate of this
counter to inform many reports this task gets over time.

Also referred to as `report_counter_success` in the Divvi Up API.

### Upload Errors

Aggregators count some DAP-level errors that lead to report rejection. Rejected
reports are not processed any further.

See sections below for a description and basic troubleshooting steps for each
error type.

#### Interval Collected Failure

Indicates there were reports that had timestamps corresponding to time intervals
that were already collected. This is only applicable for tasks with a query type
of time interval.

The rate of this error depends on the accuracy of the client time source, and
how long the collector waits after a time interval has passed before collecting
it. Use the rate to inform how long you should wait before collecting a time
interval.

Depending on how the client derives the report timestamp, it may not be possible
to fully eliminate this error.

Also referred to as `report_counter_interval_collected` in the Divvi Up API.

#### Decode Failure

Indicates there were reports that failed to decode from their DAP message
representation.

This is most often caused by task configuration mismatch between the server and
client. Ensure that all client-side task parameters match those reported by
Divvi Up.

Also referred to as `report_counter_decode_failure` in the Divvi Up API.

#### Decrypt Failure

Indicates there were reports whose leader share could not be decrypted.

This is most often caused by clients using the incorrect HPKE configuration.
Ensure that the client is using the correct task HPKE key and HPKE keys are not
being permanently cached.

Also referred to as `report_counter_decrypt_failure` in the Divvi Up API.

#### Report Expired Failure

Indicates that there were reports whose timestamp was too old. Divvi Up rejects
reports whose timestamps are more than 2 weeks in the past.

Depending on how the client derives the report timestamp, it may not be possible
to fully eliminate this error.

Also referred to as `report_counter_expired` in the Divvi Up API.

#### Outdated Key Failure

Indicates that there were reports whose leader share was encrypted with an
unknown or outdated HPKE key.

Ensure that the client is using the correct task HPKE key and HPKE keys are not
being permanently cached.

Also referred to as `report_counter_outdated_key` in the Divvi Up API.

#### Report Too Early Failure

Indicates that there were reports whose timestamp was too far in the future.
Divvi Up rejects reports whose timestamps are more than 60 seconds in the
future.

Depending on how the client derives the report timestamp, it may not be possible
to fully eliminate this error.

Also referred to as `report_counter_too_early` in the Divvi Up API.

#### Task Expired Failure

Indicates there were reports sent to this task after it had expired.

Use this metric to monitor clients migrating off of the expired task.

Also referred to as `report_counter_task_expired` in the Divvi Up API.

### API Access

Use `GET /tasks/{task_id}` to retrieve upload metrics from the API.

<!-- TODO(https://github.com/divviup/divviup-api/issues/810): Docs on CLI -->
