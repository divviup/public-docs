---
# This page was originally on /glossary, so keep it there to avoid breaking user
# links.
slug: /glossary
---

# Glossary

This glossary provides definitions of terms specific to Divvi Up and the
protocols it uses.

### Aggregator

A server that implements the aggregation subprotocol of
[DAP](#distributed-aggregation-protocol-dap). Divvi Up and its partners operate
DAP-compliant aggregators. Aggregators can also be self-hosted.

Aggregators ingest measurements sent from [clients](#client). They aggregate
reports into batches, and service [collector](#collector) requests.

Aggregators can be in one of two roles: [Leader](#leader) or [Helper](#helper).

Examples of aggregator software include [Janus (ISRG)][janus], and [Daphne
(Cloudflare, helper-only)][daphne].

### Client

An end-user app that uses the client subprotocol of
[DAP](#distributed-aggregation-protocol-dap) to contribute measurements to a
[task](#task). Typically, app developers will integrate a DAP client library to
achieve this.

### Collector

An application that implements the collector subprotocol of
[DAP](#distributed-aggregation-protocol-dap). It collects aggregated batches
from the aggregators and provides the final aggregate to the
[subscriber](#subscriber). This is most often operated by the application
developer.

A library suitable for building collectors is found in the Rust crate
[`janus_collector`][janus_collector]. A primitive collector implementation is
available in [Janus][collect.rs].

### Distributed Aggregation Protocol (DAP)

A protocol that describes a multi-party distributed system for privacy
preserving aggregation of measurements. It is currently in the draft phase. Its
specification can be viewed on the [IETF data tracker][DAP].

Each participant in a DAP system adopts one of these roles: [client](#client),
[collector](#collector), [leader](#leader), or [helper](#helper).

### Helper

A [DAP](#distributed-aggregation-protocol-dap) aggregator that performs
aggregation and collection in response to direction from the Leader.

The system and network bandwidth requirements for a helper are lower than those
for a leader.

### Leader

A [DAP](#distributed-aggregation-protocol-dap) aggregator that directly ingests
[reports](#report) from clients, and drives the aggregation and collection
processes with the helper. The leader determines how reports are to be batched.

The system and network bandwidth requirements for a leader are higher than for
those for a helper.

### Query type

Describes how [reports](#report) are grouped into batches for aggregation. There
are two query types defined by [DAP](#distributed-aggregation-protocol-dap):

- Time-interval: Reports are grouped into batches based on the timestamp of the
  report.
- Fixed-size: Reports are grouped into batches of fixed size by the leader.

### Report

A client-submitted measurement. Each report is composed of two report shares:
one for the leader, and one for the helper.

Each report share contains the following data:

- An encrypted shard of the original measurement.
- A public share, containing additional data required for validation. Not all
  measurement types require a public share.
- A randomly generated report identifier.
- The time at which the report was generated.

### Subscriber

An organization or individual who is using Divvi Up to implement privacy
perserving metrics for their application.

### Task

The core entity that Divvi Up and clients use for submitting and aggregating
measurements. Determines the type of measurement (count, sum, histogram, et.
al.), which [aggregators](#aggregator) will be used, which aggregation function
to use, and additional metadata depending on the
[DAP](#distributed-aggregation-protocol-dap) participant.

An [client](#client) application will have a task for each kind of measurement
it takes.

[janus]: https://github.com/divviup/janus
[daphne]: https://github.com/cloudflare/daphne
[janus_collector]: https://docs.rs/janus_collector/latest/janus_collector/
[collect.rs]:
  https://github.com/divviup/janus/blob/main/tools/src/bin/collect.rs
[DAP]: https://datatracker.ietf.org/doc/draft-ietf-ppm-dap/
