# NeoNet modelling
> Creating Bayesian modelling for radiocarbon dates and stratigraphy of the **NeoNet** dataset

NeoNet ([GitHub](https://github.com/zoometh/neonet), [online app](http://shinyserver.cfs.unipi.it:3838/C14/)) dynamically maps **radiocarbon dates** of the Mesolithic/Neolithic transition, and records other contextual information (stratigraphic units, cultural periods, etc.). The current objective is to

1. reconstruct the **stratigraphy** (Harris matrix) of these archaeological sites using DAGs (directed acyclic graphs);
    - merge Harris matrices with the same [Period](https://zoometh.github.io/neonet/#mf.period) between different sites 
    - etc.
2. process the radiocarbon dates and stratigraphic relationships to perform **Bayesian modelling** on-the-fly;
3. merged **cultural periods** from the https://devr.cepam.cnrs.fr/shinyapps/leap/ application with this model;
    - merge Harris matrices with the same [Culture](https://zoometh.github.io/neonet/#3_data_panel)[^1] between different sites 

## Stratigraphy

Using [neo_strat()](https://github.com/historical-time/caa23/blob/main/neonet/neo_strat.R) for this [dataset sample](https://github.com/historical-time/data-samples/blob/main/neonet/TEST_2.tsv) (site: Obagues de Ratera) coming from the NeoNet dataset, showing:

<p>
The **layer names** (by default): ```neo_strat()```<br>
<img src="https://github.com/historical-time/caa23/blob/main/neonet/Obagues_de_Ratera_name.jpg" width="600">
</p>

<p>
The **c14 ages** :  ```neo_strat(outLabel = c("C14Age"))```<br>
<img src="https://github.com/historical-time/caa23/blob/main/neonet/Obagues_de_Ratera_c14age.jpg" width="600">
</p>

<p>
The **periods** (for another dataset, and Pokrovnik site only) : <br> 
```
neo_strat(inData = 'https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_PERIOD.tsv',
          smp.sitename = c("Pokrovnik"),
          outLabel = c("Period")
```
<br>
<img src="https://github.com/historical-time/caa23/blob/main/neonet/Pokrovnik_period.jpg" width="600">
</p>

# CAA23
> https://2023.caaconference.org/

### Session 12: Chronological modelling: formal methods and research software
> Eythan Levy, Thomas Huet, Florian Thiery, Allard W. Mees

#### Timeline 

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

[^1]: 'Culture' is a specification of the field 'Period' in NeoNet, and it is not mandatory
