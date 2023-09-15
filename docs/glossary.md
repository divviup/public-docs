---
sidebar_position: 5
---
# Glossary

Use the glossary to find definitions and further information for new or ambiguous terms.

### Aggregator

A server that implements the Distributed Aggregation Protocol (DAP). Divvi Up and its partners 
operate DAP-compliant aggregators. Aggregators can be self-hosted.

Aggregators ingest [report shares](#report-share) sent from clients. They perform 
aggregation of batches of report shares into [aggregate shares](#aggregate-share), and service 
[collector](#collector) requests.

Aggregators can be in one of two roles, [Leader](#leader) or [Helper](#helper).

Examples of aggregator software include [Janus (ISRG)][janus], and [Daphne (Cloudflare, helper-only)][daphne].

### Client

An end-user application whose developer wishes to collect metrics on.

### Collector

An application that collects aggregate shares from aggregators and combines them into
the final aggregate. This is most often operated by the application developer.

A library suitable for building collectors is found in the crate [`janus_collector`][janus_collector].
A primitive collector implementation is available in [Janus][collect.rs].

### Helper

A DAP aggregator that performs aggregation and collection in response to direction from the Leader.
The system requirements for a helper are lower than a leader.

### Leader

A DAP aggregator that directly ingests metrics, creates aggregation and collection jobs, and drives
those jobs to completion. The system and network bandwidth requirements for a leader are higher than
for a helper.

### Query type

Describes how a batch of reports are to be aggregated. There are two query types defined by DAP:
- Time-interval: Batches are queried based on some time range.
- Fixed-size: Batches contain a fixed number of reports. The collector queries for arbitrary batches.

### Report

A client-submitted measurement.

### Subscriber

An organization or individual who is using Divvi Up to implement privacy perserving metrics for their
application.

### Task

Represents the measurement process. The task the basic entity that Divvi Up and clients use for
submitting and aggregating measurements.

[janus]: https://github.com/divviup/janus
[daphne]: https://github.com/cloudflare/daphne
[janus_collector]: https://docs.rs/janus_collector/latest/janus_collector/
[collect.rs]: https://github.com/divviup/janus/blob/main/tools/src/bin/collect.rs