# CAA23
> https://2023.caaconference.org/

## Bayesian Modelling with NeoNet
> Creating Bayesian modelling on-the-fly for the **NeoNet** app and dataset

**NeoNet** ([GitHub](https://github.com/zoometh/neonet), [online app](http://shinyserver.cfs.unipi.it:3838/C14/)) dynamically maps radiocarbon dates of the Mesolithic/Neolithic transition, and records other contextual information (stratigraphic units, cultural periods, etc.). The current objective is to

1. reconstruct the Harris matrix (stratigraphic sequences) of these archaeological sites using DAGs (directed acyclic graphs)
2. process the radiocarbon dates and stratigraphic relationships to perform Bayesian modelling on the fly.

In a second step, the cultural periods from the https://devr.cepam.cnrs.fr/shinyapps/leap/ application will be merged with this model.

### Harris Matrix

![](https://github.com/historical-time/caa23/blob/main/neonet/Obagues%20de%20Ratera.jpg)

## CIDOC-CRM
> Use of EDTF and CIDOC-CRM

```mermaid
flowchart LR
    A("-7XX/-509") --P170 defines time--> B(E52 Time-Span);
    B --P1 is identified by--> C(Pre-Roman republic);
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

* General Introduction to S12: https://historical-time.github.io/caa23/s12/pres
* Discussing the need for a new CAA Special Interest Group on chronological modelling: https://historical-time.github.io/caa23/sig/pres
