# Archaeometry Special Issue
> Publication of an Archaeometry Special Issue on Chronological Modeling

[Chronological domain list](https://github.com/historical-time/caa23/issues/5)

## Timeline

```mermaid
gantt
    title Archaeometry Special Issue
    dateFormat  YYYY-MM-DD
    section Papers
    Formal invite              : milestone, m0, 2023-05-30, 1d
    Formal response            : milestone, m0, 2023-06-21, 1d
    section Submission deadline
    Soft deadline            : milestone, m1, 2023-10-18, 1d
    Hard deadline            : milestone, m1, 2023-11-08, 1d
    section Decision 1
    Decision letter          : milestone, m1, 2023-11-12, 1d
    section Revisions
    Submission of revisions	 : milestone, m1, 2024-03-12, 1d
    section Decision Final
    Final decision           : milestone, m2, 2024-04-23, 1d
    section Proofs
    Proofs to authors        : milestone, m2, 2024-05-08, 1d
    Revised proofs           : milestone, m2, 2024-05-22, 1d
    section Issue
    Issue compilation        : milestone, m2, 2024-05-23, 1d
    Issue published          : milestone, m2, 2024-05-29, 1d
```

# Sample dataset
> Use of standards to share dates between different research projects

Authors are asked to share samples of their temporal data using standardised formats, using:
- EDTF to record an event or a duration[^1]
- CIDOC-CRM to record relations between events or durations, actors and places can be modelled with the CIDOC-CRM[^2]

For example: 

<p>

<img src="https://github.com/historical-time/data-samples/blob/main/cidoc-crm/example-thera.png" width="600">
<em>A CIDOC-CRM example for the dating of the Thera-Santorini eruption</em>
</p


Is build upon this list of nodes ([thera-cidoc-data-nodes.tsv](https://github.com/historical-time/data-samples/blob/main/cidoc-crm/thera-cidoc-data-nodes.tsv)) and edges ([thera-cidoc-data-edges.tsv](https://github.com/historical-time/data-samples/blob/main/cidoc-crm/thera-cidoc-data-edges.tsv)). The original dataset is a XLSX file, [data.xlsx](https://github.com/eamena-project/eamena-arches-dev/blob/main/data/lod/data.xlsx) that can be downloaded. 

This data means: the 'pre-Roman republic' cultural period starts somewhere during the 8th c. BCE (-7XX) and stops in -509. @zoometh is the author of [this temporal data](https://github.com/historical-time/caa23/blob/main/archaeometry-si/samples/dataset.tsv)

Using EDTF and CIDOC-CRM, it should be modelled like:

```mermaid
flowchart LR
    A("-7XX/-509") --P170 defines time--> B(E52 Time-Span);
    B --P1 is identified by--> C(Pre-Roman republic);
```

[^1]: Extended Time and date format (EDTF, ISO 8601-2:2019) is the isostandard for dates. See: http://www.loc.gov/standards/datetime/
[^2]: CIDOC-Conceptual Reference Model (CIDOC-CRM, v7.1.2 *under review* ISO) is a model for describing and organising cultural heritage information. It is extended to archaeological data with the [CRMarchaeo](https://www.cidoc-crm.org/crmarchaeo/home-3). See: https://www.cidoc-crm.org/
