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

Using [neo_strat()](https://github.com/historical-time/caa23/blob/main/neonet/functions/neo_strat.R) function for this [dataset sample](https://github.com/historical-time/data-samples/blob/main/neonet/TEST_2.tsv) (site: Obagues de Ratera) coming from the NeoNet dataset, showing:

### PhaseCode

<p>

The **layer names** (by default): ```neo_strat()```<br>
<img src="https://github.com/historical-time/caa23/blob/main/neonet/results/Obagues_de_Ratera_name.jpg" width="600">
</p>

### C14Age

<p>

The **c14 ages** :  ```neo_strat(outLabel = c("C14Age"))```<br>
<img src="https://github.com/historical-time/caa23/blob/main/neonet/results/Obagues_de_Ratera_c14age.jpg" width="600">
</p>

<p>

### Period

The **periods** (for another dataset, and Pokrovnik site only) : <br> 
```
neo_strat(inData = 'https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_PERIOD.tsv',
          smp.sitename = c("Pokrovnik"),
          outLabel = c("Period")
```
<br>
<img src="https://github.com/historical-time/caa23/blob/main/neonet/results/Pokrovnik_period.jpg" width="600">
</p>

## Cultural Periods

Using [neo_leapfrog()](https://github.com/historical-time/caa23/blob/main/neonet/functions/neo_leapfrog.R) function to merge dataframe from NeoNet and Leapfrog on common C14 LabCode values: <https://historical-time.github.io/caa23/neonet/results/NN_and_LF.html>

<p>

Interactive dataframe: ```neo_leapfrog(DT = T)```<br>
<img src="NN_and_LF.gif" width="600">
<em>Screen capture of [NN_and_LF.html](https://historical-time.github.io/caa23/neonet/results/NN_and_LF.html)</em>
</p>
