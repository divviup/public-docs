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

This feature was implemented February 24th, 2024. Tasks created before will
start counting after then, rather than for the lifetime of the task.

:::

### Successful Uploads

Indicates reports successfully ingested by the leader. Reports contributing to
this count are eligible for aggregation and collection. Use the rate of this
counter to inform how many reports this task gets over time.

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
Divvi Up. In particular, check for these common configuration mistakes:

- Client's DAP library is using an incorrect DAP version, e.g. library supports
  DAP-04 when the task supports DAP-07.
- Using the wrong function, e.g. using `sum` when the task is configured for
  `count`.

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

## Aggregation Job Metrics

Divvi Up records metrics on reports being prepared for aggregation in each task.
These work much the same way as upload metrics: they are reported via the task
leader and are monotonic counters lasting the lifetime of a task.

These metrics record failures that can occur even if a report is successfully
uploaded to the leader. In particular, errors in the task's helper are relayed
to Divvi Up via this mechanism. This works for any helper conforming to the
[Distributed Aggregation Protocol][DAP], not just Divvi Up's aggregator.

:::note

This feature was implemented August 14, 2025. Tasks created before will start
counting after then, rather than for the lifetime of the task.

:::

### Successful Report Preparations

Indicates reports successfully prepared by the aggregators. Reports contributing
to this count are eligible for collection.

Also referred to as `aggregation_job_counter_success` in the Divvi Up API.

### Aggregation Errors

Aggregators count some DAP-level errors that lead to report rejection. Rejected
reports are not processed any further.

See sections below for a description and basic troubleshooting steps for each
error type.

#### Batch Collected (Helper) Failure

Indicates there were reports rejected by the helper becuase they had timestamps
corresponding to time intervals that were already collected. This is only
applicable for tasks with a query type of time interval.

The rate of this error depends on the accuracy of the client time source, and
how long the collector waits after a time interval has passed before collecting
it. Use the rate to inform how long you should wait before collecting a time
interval.

Depending on how the client derives the report timestamp, it may not be possible
to fully eliminate this error.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_batch_collected` in the
Divvi Up API.

#### Report Replayed (Helper) Failure

Indicates that there were reports rejected by the helper because their report ID
had already been aggregated. This could indicate misconfiguration in the clients
contributing to the task or an unsuccessful attempt to skew aggregations.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_report_replayed` in the
Divvi Up API.

#### Report Dropped (Helper) Failure

Indicates that the helper rejected a report because the leader removed it from
an aggregation job. Check on errors reported from the task's leader.

This error can only occur when using VDAFs that require multiple rounds of
preparation, which is not the case for the Prio3 family of VDAFs.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_report_dropped` in the Divvi
Up API.

#### Unknown HPKE Config ID (Helper) Failure

Indicates that reports were rejected because they were encrypted with an HPKE
configuration that the helper does not recognize, making them impossible to
decrypt.

This indicates that the leader was able to decrypt its report share during
upload, but the helper failed during preparation. This suggests a configuration
problem with the helper's advertised HPKE configurations or with the task's
clients.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_hpke_unknown_config_id` in
the Divvi Up API.

#### HPKE Decryption (Helper) Failure

Indicates that reports were rejected because the helper was unable to decrypt
them.

This indicates that the leader was able to decrypt its report share during
upload, but the helper failed during preparation. This suggests a configuration
problem with the helper's advertised HPKE configurations or with the task's
clients. It could also indicate a problem with the HPKE implementations in the
clients or the helper.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_hpke_decrypt_failure` in the
Divvi Up API.

#### VDAF Preparation (Helper) Failure

Indicates that reports were rejected by the helper because VDAF preparation
failed. This could be caused by malicious clients trying to inject invalid
reports or a task configuration problem. Make sure that the client implements
the right version of [DAP][DAP] and that the correct task parameters are in use.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_vdaf_prep_error` in the
Divvi Up API.

#### Task Expiration (Helper) Failure

Indicates there were reports rejected by the helper because they were sent to
this task after it had expired.

Use this metric to monitor clients migrating off of the expired task.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_task_expired` in the Divvi
Up API.

#### Invalid Message (Helper) Failure

Indicates that the helper rejected reports because of incorrectly constructed or
encoded messages.

This can be caused by configuration problems in the client. Make sure that the
client implements the right version of [DAP][DAP] and that the correct task
parameters are in use.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_invalid_message` in the
Divvi Up API.

#### Report Too Early (Helper) Failure

Indicates that there were reports rejected by the helper because their timestamp
was too far in the future.

Depending on how the client derives the report timestamp, it may not be possible
to fully eliminate this error.

You may wish to contact the helper operator for further troubleshooting.

Also referred to as `aggregation_job_counter_helper_report_too_early` in the
Divvi Up API.

[DAP]: https://datatracker.ietf.org/doc/draft-ietf-ppm-dap/

## API Access

Use `GET /tasks/{task_id}` to retrieve upload metrics from the API. You can also
use the `divviup` CLI to get a task's metrics, among other information about a
task:

```sh
divviup --token <AUTH_TOKEN> \
  --account-id <ACCOUNT_ID> \
  task get <TASK_ID>
```

<!-- TODO(https://github.com/divviup/divviup-api/issues/810): Docs on CLI -->
