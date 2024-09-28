
## Starts during
> .. using ChatGPT

```mermaid
graph TD;
    CeramicB[E55 Type: Type of Ceramic B]
    IronAge[E4 Period: Iron Age]
    CeramicBTimeSpan[E52 Time-Span: Ceramic B Production Start]
    IronAgeTimeSpan[E52 Time-Span: Iron Age Duration]

    CeramicB -->|P4 has time-span| CeramicBTimeSpan
    IronAge -->|P4 has time-span| IronAgeTimeSpan
    CeramicBTimeSpan -->|P117 occurs during| IronAgeTimeSpan

    classDef typeClass fill:#cfc,stroke:#333,stroke-width:2px;
    classDef timeSpanClass fill:#fcf,stroke:#333,stroke-width:2px;
    class CeramicB,IronAge typeClass;
    class CeramicBTimeSpan,IronAgeTimeSpan timeSpanClass;
```

## Ends during
> .. using ChatGPT

```mermaid
graph TD;
    CeramicA[E5 Event: Type of Ceramic A Usage]
    IronAge[E4 Period: Iron Age]
    TimeSpanCeramicA[E52 Time-Span: Usage Time-Span of Ceramic A]
    TimeSpanIronAge[E52 Time-Span: Iron Age Period]

    CeramicA -->|P4 has time-span| TimeSpanCeramicA
    IronAge -->|P4 has time-span| TimeSpanIronAge
    TimeSpanCeramicA -->|P117 occurs during| TimeSpanIronAge
    TimeSpanCeramicA -->|P82b end of the span is qualified by| TimeSpanIronAge

    classDef eventName fill:#f9f,stroke:#333,stroke-width:2px;
    classDef periodName fill:#cff,stroke:#333,stroke-width:2px;
    classDef timeSpanName fill:#ccf,stroke:#333,stroke-width:2px;
    class CeramicA,IronAge eventName;
    class TimeSpanCeramicA,TimeSpanIronAge timeSpanName;
```