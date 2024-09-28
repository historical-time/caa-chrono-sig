
## Starts during

```mermaid
graph TD;
    EventA[E5 Event: Lecture]
    EventB[E5 Event: Conference Session]
    TimeSpanA[E52 Time-Span: Lecture Time-Span]
    TimeSpanB[E52 Time-Span: Conference Session Time-Span]

    EventA -->|P4 has time-span| TimeSpanA
    EventB -->|P4 has time-span| TimeSpanB
    TimeSpanA -->|P117 occurs during| TimeSpanB

    classDef eventName fill:#f9f,stroke:#333,stroke-width:2px;
    classDef timeSpanName fill:#ccf,stroke:#333,stroke-width:2px;
    class EventA,EventB eventName;
    class TimeSpanA,TimeSpanB timeSpanName;
```