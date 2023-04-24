# CAA23
> https://2023.caaconference.org/

## CIDOC-CRM

XXX
```mermaid
flowchart LR
    A("-7XX/-509") --P170 defines time--> B(E52 Time-Span);
    B --P1 is identified by-->C(Pre-Roman republic);
```

Model
```mermaid
flowchart LR
    A(E4 Period) --P4 has timespan--> B(E52 Time-Span);
    B --P170 defines time--> C(E61 Time Primitive);
```cd 

Instancied example
```mermaid
flowchart LR
    A(Pre-Roman republic) --P4 has timespan--> B("???");
    B --P170 defines time--> C("-7XX/-509");
```


## Session 12: Chronological modelling: formal methods and research software
> Eythan Levy, Thomas Huet, Florian Thiery, Allard W. Mees

### Timeline 

```mermaid
gantt
    title CAA23, session 12
    dateFormat  YYYY-MM-DD
    tickInterval 1day
    excludes    weekends
    section CAA23
    CAA23                    : a0, 2023-04-03, 2023-04-06
    S12                      : milestone, m3, 2023-04-04, 1d
```

* General Introduction to S12: https://archaeochrono.github.io/caa23/s12/pres
* Discussing the need for a new CAA Special Interest Group on chronological modelling: https://archaeochrono.github.io/caa23/sig/pres