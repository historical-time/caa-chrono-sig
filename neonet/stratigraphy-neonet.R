# create a DAG for a sample site
library(igraph)
library(ggraph)

verbose <- T

data.url <- "https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_2.tsv"
df <- read.table(data.url, sep = "\t", header = T)

# logical test to select only PhaseCode having a relationship 'After' with another one
no.existing.relations <- is.na(df[ , "After"]) | df[ , "After"] == ''

# a list to record all DAGs
list.dags <- list()

# loop through sites
for(site in unique(df[ , "SiteName"])){
  if(verbose){print(paste0("* site: ", site))}
  PhaseCode.strati <- df[!no.existing.relations & df[ , "SiteName"] == site, ]
  before <- after <- rdate <- c()
  # loop through layers to build the DAG
  for(phase in seq(1, nrow(PhaseCode.strati))){
    before <-c(before, PhaseCode.strati[phase , "PhaseCode"])
    after <- c(after, PhaseCode.strati[phase , "After"])
    rdate <- c(rdate, PhaseCode.strati[phase , "LabCode"])
  }
  if(verbose){print(paste0("    - nb relation: ", length(before)))}
  # nodes and edges
  layers <- data.frame(name = before)
  relations <- data.frame(from = before,
                          to = after)

  # cross-check, error messages
  exist.only.in.layers <- setdiff(unique(layers$name),
                                  unique(c(relations$from, relations$to)))
  if(length(exist.only.in.layers) > 0){
    stop(paste0("These PhaseCode are only listed in the layers:",
                paste0(exist.only.in.layers, collapse = ", ")))
  }
  exist.only.in.relations <- setdiff(unique(c(relations$from, relations$to)),
                                     unique(layers$name))
  if(length(exist.only.in.relations) > 0){
    message(paste0("These PhaseCode are only listed in the relationships: ",
                   paste0(exist.only.in.relations, collapse = ", ")))
    message("Will add them into the layers list")
    layers <- rbind(layers, data.frame(name = exist.only.in.relations))
  }
  g.igraph <- graph_from_data_frame(relations,
                                    vertices = layers,
                                    directed = TRUE)
  g.dag <- ggraph(g.igraph, layout = "sugiyama") +
    ggtitle(site) +
    geom_edge_elbow() +
    geom_node_label(aes(label = name)) +
    theme_graph()
  list.dags[[length(list.dags) + 1]] <- g.dag
}

# plot the first DAG of the list
list.dags[[1]]
# save
ggsave(paste0(getwd(), "/neonet/", site, ".jpg"),
       list.dags[[1]],
       width = 8,
       height = 6)




