# create a DAG for a sample site
library(igraph)

verbose <- T

data.url <- "https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_2.tsv"
df <- read.table(data.url, sep = "\t", header = T)

# logical test to select only PhaseCode having a relationship 'After' with another one
no.existing.relations <- is.na(df[ , "After"]) | df[ , "After"] == ''

# loop through sites
for(site in unique(df[ , "SiteName"])){
  if(verbose){print(paste0("* site: ", site))}
  PhaseCode.strati <- df[!no.existing.relations & df[ , "SiteName"] == site, ]
  before <- after <- c()
  # loop through layers to build the DAG
  for(phase in seq(1, nrow(PhaseCode.strati))){
    before <-c(before, PhaseCode.strati[phase , "PhaseCode"])
    after <- c(after, PhaseCode.strati[phase , "After"])
  }
  if(verbose){print(paste0("    - nb relation: ", length(before)))}
}
