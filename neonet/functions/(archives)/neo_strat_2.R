# TODO strati on C14 not Layers


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
                            suffix = "*",
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
neo_strat_xcheck <- function(df = NA,
                             layers = NA,
                             relations = NA,
                             neo.phasecode = NA,
                             neo.labcode = NA,
                             neo.c14age = NA,
                             neo.period = NA,
                             verbose = T){
  exist.only.in.layers <- setdiff(unique(layers$name),
                                  unique(c(relations$from, relations$to)))
  if(length(exist.only.in.layers) > 0){
    message(paste0("These LabCode are only listed in the layers: '",
                   paste0(exist.only.in.layers, collapse = ", "), "'"))
  }
  exist.only.in.relations <- setdiff(unique(c(relations$from, relations$to)),
                                     unique(layers$name))
  if(length(exist.only.in.relations) > 0){
    message(paste0("These LabCode are only listed in the relationships: '",
                   paste0(exist.only.in.relations, collapse = ", "), "', they will be added to the layers list"))
    # print(colnames(df))
    # print(df[, neo.phasecode])
    only.in.relations <- df[df[[neo.labcode]] == exist.only.in.relations,
                            c(neo.phasecode, neo.labcode, neo.c14age, neo.period)]
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
#' @param inData a CSV or a TSV file adapted to NeoNet: listing the radiocarbon dates (LabCode) by layers (PhaseCode) and sites (SiteName). Only sites having values for stratigraphic relationships (see: `neo.relation` argument) will be read.
#' @param neo.relation used for logical test to select only PhaseCode having a particular neo.relation with another one. Default: 'After'.
#' @param suffix the suffix that will be added to layers names having the same names (but different C14 dates) to distinguish them. For example '*': 13A1, 13A1*.
#' @param smp.sitename limit the calculation to one or more site. Default NA.
#' @param outLabel the label that will be displayed on the Harris matrix. Default: 'PhaseCode'.
#'
#' @return Ggplot charts of sites' Harris matrices
#'
#' @examples
#'
#' # Layer names for a single site (Pokrovnik)
#' neo_strat(smp.sitename = "Pokrovnik")
#'
#' # Periods for a single site (Pokrovnik)
#' neo_strat(smp.sitename = "Pokrovnik", outLabel = c("Period"))
#'
#' # Export, with layer names by default
#' neo_strat(export.plot = T)
#'
#' # Export, with C14Age instead of layer names
#' neo_strat(outLabel = c("C14Age"), export.plot = T)
#'
#' # Export, with Periods instead of layer names, limited to one site (Pokrovnik)
#' neo_strat(smp.sitename = c("Pokrovnik"),
#'           outLabel = c("Period"),
#'           export.plot = T)
#' @export
neo_strat <- function(inData = "https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_PERIOD.tsv",
                      neo.sitename = c("SiteName"),
                      neo.phasecode = c("PhaseCode"),
                      neo.relation = c("After"),
                      neo.labcode = c("LabCode"),
                      neo.c14age = c("C14Age"),
                      neo.period = c("Period"),
                      period.color =  "https://raw.githubusercontent.com/zoometh/neonet/main/doc/img/periods.tsv",
                      smp.sitename = NA,
                      suffix = "*",
                      outLabel = neo.labcode,
                      export.plot = F,
                      outDir = paste0(getwd(), "/neonet/results/"),
                      verbose = T){
  # suffix = "*" ; verbose = T ; inData = "https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_PERIOD.tsv" ; neo.sitename = c("SiteName") ; neo.phasecode = c("PhaseCode") ; neo.relation = c("After") ; neo.labcode = c("LabCode") ; neo.c14age = c("C14Age") ; neo.period = c("Period") ; period.color =  "https://raw.githubusercontent.com/zoometh/neonet/main/doc/img/periods.tsv" ; outLabel = "Period" ; smp.sitename = c("Pokrovnik") ; site <- "Pokrovnik"
  # suffix = "*" ; verbose = T ; inData = 'https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/Roc du Dourgne_2023-07-30.csv' ; neo.sitename = c("SiteName") ; neo.phasecode = c("PhaseCode") ; neo.relation = c("After") ; neo.labcode = c("LabCode") ; neo.c14age = c("C14Age") ; neo.period = c("Period") ; period.color =  "https://raw.githubusercontent.com/zoometh/neonet/main/doc/img/periods.tsv" ; outLabel = "Period" ; smp.sitename = NA ; site <- "Roc du Dourgne"
  if(verbose){print(paste0("Read datatset: '", basename(inData),"'"))}
  if(DescTools::SplitPath(inData)$extension == "tsv"){
    df <- read.table(inData, sep = "\t", header = T)
  }
  if(DescTools::SplitPath(inData)$extension == "csv"){
    df <- read.csv(inData, header = T)
  }

  if(verbose){print(paste0("'neo.relation' column and type: '", neo.relation,"'"))}
  no.existing.relations <- is.na(df[ , neo.relation]) | df[ , neo.relation] == ''
  # a list to record all DAGs
  list.dags <- list()
  # selected sites or loop through all sites
  if(!is.na(smp.sitename)){
    selected.sitenames <- smp.sitename
  } else {
    selected.sitenames <- unique(df[ , neo.sitename])
  }
  for(site in selected.sitenames){
    # site <- "Obagues de Ratera"
    # site <- "Pokrovnik"
    if(verbose){print(paste0("* site: ", site))}
    LabCode.strati <- df[!no.existing.relations & df[ , neo.sitename] == site, ]
    before <- after <- labcode <- c14age <- period <- phasecode <-  c()
    # loop through layers to build the DAG, use NeoNet mandatory fields
    for(phase in seq(1, nrow(LabCode.strati))){
      before <- c(before, LabCode.strati[phase, neo.labcode]) # before is the layer itself
      after <- c(after, LabCode.strati[phase, neo.relation]) # after is the layer recorded in 'After' column
      phasecode <- c(phasecode, LabCode.strati[phase, neo.phasecode])
      labcode <- c(labcode, LabCode.strati[phase, neo.labcode])
      c14age <- c(c14age, LabCode.strati[phase, neo.c14age])
      period <- c(period, LabCode.strati[phase, neo.period])
    }
    if(verbose){print(paste0("    - nb stratigraphical relationships: ", length(before)))}
    ## nodes and edges
    # nodes
    layers <- data.frame(name = before,
                         labcode = labcode,
                         c14age = c14age,
                         period = period
    )

    ## edges
    relations <- data.frame(from = before,
                            to = after)

    # TODO (maybe): loop on these 2 functions
    layers <- neo_strat_dupli(layers = layers,
                              suffix = suffix,
                              verbose = verbose)
    layers <- neo_strat_xcheck(df = df,
                               layers = layers,
                               relations = relations,
                               neo.labcode = neo.labcode,
                               neo.phasecode = neo.phasecode,
                               neo.c14age = neo.c14age,
                               neo.period = neo.period,
                               verbose = verbose)
    layers <- neo_strat_dupli(layers = layers,
                              suffix = suffix,
                              verbose = verbose)
    layers <- neo_strat_xcheck(df = df,
                               layers = layers,
                               relations = relations,
                               neo.labcode = neo.labcode,
                               neo.phasecode = neo.phasecode,
                               neo.c14age = neo.c14age,
                               neo.period = neo.period,
                               verbose = verbose)
    # nodes labels
    outLabel <- ifelse(outLabel == "C14Age",  "c14age",
                       ifelse(outLabel == "PhaseCode", "name",
                              ifelse(outLabel == "Period", "period",
                                     ifelse(outLabel == "LabCode", "labcode" , NA))))
    # colors
    if(outLabel == "period"){
      df.colors.per <- read.table(period.color, header = T)
      layers <- merge(layers, df.colors.per, by = "period", all.x = T)
      layers <- layers[ , c("name", "period", "labcode", "c14age", "color")]
      if(verbose){print(paste0("       - added colors for: ", outLabel))}
    } else {
      # black by default
      layers$color <- "black"
      layers <- layers[ , c("name", "period", "labcode", "c14age", "color")]
      if(verbose){print(paste0("       - added default colors 'black'"))}
    }

    # igraph
    g.igraph <- igraph::graph_from_data_frame(relations,
                                              vertices = layers,
                                              directed = TRUE)
    if(verbose){print(paste0("    - directed graph computed"))}
    # # labels
    # outLabel <- ifelse(outLabel == "C14Age",  "c14age",
    #                    ifelse(outLabel == "PhaseCode", "name",
    #                           ifelse(outLabel == "Period", "period",
    #                                  ifelse(outLabel == "LabCode", "labcode" , NA))))
    # if(outLabel == "period"){
    #   df.colors.per <- read.table(period.color, header = T)
    # }
  }
  g.dag <- ggraph::ggraph(g.igraph, layout = "sugiyama") +
    ggplot2::ggtitle(label = site,
                     subtitle = outLabel) +
    ggraph::geom_edge_elbow() +
    # ggraph::geom_node_label(ggplot2::aes(label = .data[[outLabel]],
    #                                      color = .data[["color"]])) +
    ggraph::geom_node_label(ggplot2::aes(label = .data[[outLabel]],
                                         color = igraph::V(g.igraph)$color)) +
    # ggplot2::scale_colour_identity(guide = "legend",
    #                                name = outLabel,
    #                                label = .data[[outLabel]]) +
    # ggplot2::scale_colour_identity(guide = "legend",
    #                                name = outLabel,
    #                                label = unique(igraph::V(g.igraph)$period)) +
    ggplot2::scale_colour_identity() +
    ggraph::theme_graph()

  if(verbose){print(paste0("    - sugiyama graph layout computed"))}

  list.dags[[length(list.dags) + 1]] <- g.dag
  if(!export.plot){
    # plot the first DAG of the list
    print(list.dags[[1]])
  }
  if(export.plot){
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


neo_strat(inData = 'https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/Roc du Dourgne_2023-07-30.csv',
          outLabel = c("C14Age"))



neo_strat(inData = 'https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_PERIOD.tsv',
          smp.sitename = c("Obagues de Ratera"),
          outLabel = c("C14Age"))

neo_strat(inData = 'https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_PERIOD.tsv',
          smp.sitename = c("Obagues de Ratera"),
          outLabel = c("C14Age"))

df.oba <- read.table('https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_3.tsv', sep = "\t", header = T)

df <- read.table("http://mappaproject.arch.unipi.it/mod/files/140_140_id00140_doc_elencoc14.tsv", sep = "\t", header = T, quote = "")

colnames(df)
