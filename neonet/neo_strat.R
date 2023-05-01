#' add suffixes to duplicated layer names
#'
#' @name neo_strat_dupli
#'
#' @description
#'
#' @param layers nodes
#'
#' @return dataframe of layers with modified labels
#'
#' @examples
#'
#'
#'
#' @export
neo_strat_dupli <- function(layers = NA,
                            verbose = T){
  # handle duplicated layers names (those having two or more c14 dates)
  dupl.name <- layers[duplicated(layers$name), c("name")]
  # change layers names adding suffixes
  for(i in dupl.name){
    # i <- "13A1"
    df.dup <- layers[layers$name == i, ]
    # loop to change names
    for (j in seq(2,  nrow(df.dup))){
      layers[row.names(df.dup[j, ]), c("name")] <- paste0(i, paste0(rep(suffix, j-1), collapse = ''))
    }
  }
  return(layers)
}


#' cross-check edges and nodes, messages or error messages
#'
#' @name neo_strat_xcheck
#'
#' @description
#'
#' @param layers nodes
#' @param relations edges
#'
#' @return dataframe of layers with added labels of missing edges
#'
#' @examples
#'
#'
#'
#' @export
neo_strat_xcheck <- function(layers = NA,
                             relations = NA,
                             verbose = T){
  exist.only.in.layers <- setdiff(unique(layers$name),
                                  unique(c(relations$from, relations$to)))
  if(length(exist.only.in.layers) > 0){
    message(paste0("These PhaseCode are only listed in the layers: '",
                   paste0(exist.only.in.layers, collapse = ", "), "'"))
  }
  exist.only.in.relations <- setdiff(unique(c(relations$from, relations$to)),
                                     unique(layers$name))
  if(length(exist.only.in.relations) > 0){
    message(paste0("These PhaseCode are only listed in the relationships: '",
                   paste0(exist.only.in.relations, collapse = ", "), "', they will be added to the layers list"))
    only.in.relations <- df[df[, neo.phasecode] == exist.only.in.relations,
                            c(neo.phasecode, neo.labcode, neo.c14age)]
    names(only.in.relations) <- names(layers)
    # dplyr::bind_rows(layers, only.in.relations)
    layers <- rbind(layers, only.in.relations)
  }
  return(layers)
}


#' creates a DAG to model the stratigraphy (Harris Matrix) of a sample site
#'
#' @name neo_strat
#'
#' @description Creates a DAG to model the stratigraphy of a sample site using graph theory. The dataset in NeoNet where individuals are radiocarbon dates. Here, the individuals are layers. Radiocarbon dates and archaeological layers are handled for later Bayesian modelling.
#'
#' @param inData a TSV file adapted to NeoNet: listing the radiocarbon dates (LabCode) by layers (PhaseCode) and sites (SiteName). Only sites having values for stratigraphic relationships (see: `neo.relation` argument) will be read.
#' @param neo.relation used for logical test to select only PhaseCode having a particular neo.relation with another one. Default: 'After'.
#' @param suffix the suffix that will be added to layers names having the same names (but different C14 dates) to distinguish them. For example '*': 13A1, 13A1*.
#' @param outLabel the label that will be displayed on the Harris matrix. Default: 'PhaseCode'.
#'
#' @return Ggplot charts of sites' Harris matrices
#'
#' @examples
#'
#' # Export, with layer names by default
#' neo_strat(export.plot = T, outDir = paste0(getwd(), "/neonet/"))
#'
#' # Export, with C14Age instead of layer names
#' neo_strat(outLabel = c("C14Age"), export.plot = T, outDir = paste0(getwd(), "/neonet/"))
#'
#' @export
neo_strat <- function(inData = "https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_2.tsv",
                      neo.sitename = c("SiteName"),
                      neo.phasecode = c("PhaseCode"),
                      neo.relation = c("After"),
                      neo.labcode = c("LabCode"),
                      neo.c14age = c("C14Age"),
                      suffix = "*",
                      outLabel = neo.phasecode,
                      export.plot = F,
                      outDir = getwd(),
                      # outFile = NA,
                      verbose = T){
  df <- read.table(inData, sep = "\t", header = T)
  if(verbose){print(paste0("neo.relation column and type: '", neo.relation,"'"))}
  no.existing.relations <- is.na(df[ , neo.relation]) | df[ , neo.relation] == ''
  # a list to record all DAGs
  list.dags <- list()
  # loop through sites
  for(site in unique(df[ , neo.sitename])){
    # site <- "Obagues de Ratera"
    if(verbose){print(paste0("* site: ", site))}
    PhaseCode.strati <- df[!no.existing.relations & df[ , neo.sitename] == site, ]
    before <- after <- labcode <- c14age <- c()
    # loop through layers to build the DAG, use NeoNet mandatory fields
    for(phase in seq(1, nrow(PhaseCode.strati))){
      before <-c(before, PhaseCode.strati[phase, neo.phasecode]) # before is the layer itself
      after <- c(after, PhaseCode.strati[phase, neo.relation]) # after is the layer recorded in 'After' column
      labcode <- c(labcode, PhaseCode.strati[phase, neo.labcode])
      c14age <- c(c14age, PhaseCode.strati[phase, neo.c14age])
    }
    if(verbose){print(paste0("    - nb relation: ", length(before)))}
    # nodes and edges
    layers <- data.frame(name = before,
                         labcode = labcode,
                         c14age = c14age
    )
    relations <- data.frame(from = before,
                            to = after)


    # # cross-check, messages or error messages
    # exist.only.in.layers <- setdiff(unique(layers$name),
    #                                 unique(c(relations$from, relations$to)))
    # if(length(exist.only.in.layers) > 0){
    #   stop(paste0("These PhaseCode are only listed in the layers:",
    #               paste0(exist.only.in.layers, collapse = ", ")))
    # }
    # exist.only.in.relations <- setdiff(unique(c(relations$from, relations$to)),
    #                                    unique(layers$name))
    # if(length(exist.only.in.relations) > 0){
    #   message(paste0("These PhaseCode are only listed in the relationships: '",
    #                  paste0(exist.only.in.relations, collapse = ", "), "', they will be added to the layers list"))
    #   only.in.relations <- df[df[, neo.phasecode] == exist.only.in.relations,
    #                           c(neo.phasecode, neo.labcode, neo.c14age)]
    #   names(only.in.relations) <- names(layers)
    #   # dplyr::bind_rows(layers, only.in.relations)
    #   layers <- rbind(layers, only.in.relations)
    # }


    layers <- neo_strat_dupli(layers)
    layers <- neo_strat_xcheck(layers, relations)
    layers <- neo_strat_dupli(layers)
    layers <- neo_strat_xcheck(layers, relations)

    g.igraph <- igraph::graph_from_data_frame(relations,
                                              vertices = layers,
                                              directed = TRUE)

    outLabel <- ifelse(outLabel == "C14Age",  "c14age",
                       ifelse(outLabel == "PhaseCode", "name",
                              ifelse(outLabel == "LabCode", "labcode" , NA)))
  }
  g.dag <- ggraph::ggraph(g.igraph, layout = "sugiyama") +
    ggplot2::ggtitle(label = site,
                     subtitle = outLabel) +
    ggraph::geom_edge_elbow() +
    ggraph::geom_node_label(ggplot2::aes(label = .data[[outLabel]])) +
    ggraph::theme_graph()
  list.dags[[length(list.dags) + 1]] <- g.dag
  if(!export.plot){
    # plot the first DAG of the list
    print(list.dags[[1]])
  }
  if(export.plot){
    # if(is.na(outFile)){outFile <- paste0(site, ".jpg")}
    outExport <- paste0(outDir, site, "_", outLabel,".jpg")
    outExport <- gsub(" ", "_", outExport)
    # save
    ggplot2::ggsave(outExport,
                    list.dags[[1]],
                    width = 8,
                    height = 6)
    if(verbose){print(paste0("Plot has been exported: ", outExport))}
  }
}

# neo_strat(export.plot = T, outDir = paste0(getwd(), "/neonet/"))
# neo_strat(outLabel = c("C14Age"), export.plot = T, outDir = paste0(getwd(), "/neonet/"))
