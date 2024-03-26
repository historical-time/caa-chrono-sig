#' Editable datatable to record stratigraphic relationships
#'
#' @name neo_strat_edit
#'
#' @description Creates a DAG to model the stratigraphy of a sample site using graph theory. The dataset in NeoNet where individuals are radiocarbon dates. Here, the individuals are layers. Radiocarbon dates and archaeological layers are handled for later Bayesian modelling.
#'
#' @param inData a TSV file adapted to NeoNet: listing the radiocarbon dates (LabCode) by layers (PhaseCode) and sites (SiteName). Only sites having values for stratigraphic relationships (see: `neo.relation` argument) will be read.
#' @param neo.relation used for logical test to select only PhaseCode having a particular neo.relation with another one. Default: 'After'.
#' @param suffix the suffix that will be added to layers names having the same names (but different C14 dates) to distinguish them. For example '*': 13A1, 13A1*.
#' @param smp.sitename limit the calculation to one or more site. Default NA.
#' @param outLabel the label that will be displayed on the Harris matrix. Default: 'PhaseCode'.
#'
#' @return
#'
#' @examples
#'
#' neo_strat_edit(do = "edit", site.to.edit = "Pokrovnik")
#'
#'
#' @export
neo_strat_edit <- function(inData = "https://raw.githubusercontent.com/historical-time/data-samples/main/neonet/TEST_PERIOD.tsv",
                           neo.sitename = c("SiteName"),
                           neo.phasecode = c("PhaseCode"),
                           neo.relation = c("After"),
                           neo.labcode = c("LabCode"),
                           neo.c14age = c("C14Age"),
                           neo.period = c("Period"),

                           do = c("recorded", "non recorded", "edit"),
                           site.to.edit = NA,
                           summary = T,

                           smp.sitename = NA,
                           suffix = "*",
                           outLabel = neo.phasecode,
                           export.plot = F,
                           outDir = paste0(getwd(), "/neonet/results/"),
                           verbose = T){
  df <- read.table(inData, sep = "\t", header = T, quote = "")
  if(do == "recorded"){
    df.recorded <- df[!is.na(df[[neo.relation]]) & df[[neo.relation]] != "", ]
    if(summary){
      print(paste0("These sites have the stratigraphical relationship '", neo.relation, "' recorded"))
      sites.recorded.strat.rel <- sort(unique(df.recorded[[neo.sitename]]))
      cat(sites.recorded.strat.rel, sep = "\n")
    }
  }
  if(do == "non recorded"){
    df.recorded.not <- df[is.na(df[[neo.relation]]) | df[[neo.relation]] == "", ]
    if(summary){
      print(paste0("These sites don't have the stratigraphical relationship '", neo.relation, "' recorded"))
      sites.recorded.non.strat.rel <- sort(unique(df.recorded.not[[neo.sitename]]))
      cat(sites.recorded.non.strat.rel, sep = "\n")
    }
  }
  if(do == "edit"){
    # site.to.edit <- "Krivace" # a site without strat relations
    # site.to.edit <- "Pokrovnik" # a site with strat relations
    df.site.to.edit <- df[df[[neo.sitename]] == site.to.edit, ]
    to.shiny <- readline(paste0("You are about to run an editable datatable with Shiny for this site: '",
                                site.to.edit, "' (y/n)?"))
    if(to.shiny == 'y' | to.shiny == 'Y'){

      # library(DT)
      # datatable(df.site.to.edit, editable = T)

      # try to run Shiny with this df
      # cwd <- dirname(rstudioapi::getActiveDocumentContext()$path)
      cwd <- paste0(getwd(), "/neonet/functions")
      f.neo_strat <- paste0(cwd, "/neo_strat.R")
      if(verbose){print(paste0("Will read: ", f.neo_strat))}
      # rstudioapi::jobRunScript(path = paste0(cwd, "/editabledata_test.R"), importEnv = TRUE)
      source(f.neo_strat)

      # after https://stackoverflow.com/questions/58812512/how-to-edit-and-save-changes-made-on-shiny-datatable-using-dt-package


      library(shiny)
      library(DT)

      d1 <- df.site.to.edit # this df has been created by neo_strat_edit.R

      ui <- shiny::fluidPage(
        shiny::titlePanel("NeoNet - stratigraphical relationships"),
        h3(site.to.edit),
        mainPanel(
          tabsetPanel(
            id = 'dataset',
            tabPanel("data", #"Sample Bank",

                     DT::dataTableOutput("site.data"),
                     # br(),
                     # actionButton("viewBtn","View"),
                     # br(),
                     # actionButton("saveBtn","Save"),
                     br(),
                     plotOutput("gg.strati")
            ))))

      server <- function(input, output) {


        output$site.data <- DT::renderDataTable(
          DT::datatable(
            d1,
            selection = 'none',
            editable = TRUE,
            rownames = TRUE,
            extensions = 'Buttons',
            width = "100%",
            options = list(
              searching = TRUE,
              # fixedColumns = TRUE,
              # autoWidth = TRUE,
              # ordering = TRUE,
              lengthMenu = list(c('50', '100', '200', -1),
                                c('50', '100', '200', 'All')),
              paging = TRUE,
              dom = 'Bfrtip',
              buttons = list(
                list(extend = "csv", title = site.to.edit)
              )
              # buttons = c('csv')
            ),
            class = "display"
          )
        )


        observeEvent(input$site.data_cell_edit, {
          d1[input$site.data_cell_edit$row,input$site.data_cell_edit$col] <<- input$site.data_cell_edit$value
        })


        # view_fun <- eventReactive(input$viewBtn,{
        #   if(is.null(input$saveBtn)||input$saveBtn==0)
        #   {
        #     returnValue()
        #   }
        #   else
        #   {
        #     DT::datatable(d1, selection = 'none')
        #   }
        #
        # })
        # observeEvent(input$saveBtn,{
        #   outData <- paste0(site.to.edit, ".csv")
        #   write.csv(d1, outData)
        # })

        output$gg.strati <- renderPlot({
          neo_strat(smp.sitename = site.to.edit)
        })

        # output$updated.df <- DT::renderDataTable({
        #   view_fun()
        # }
        # )
      }

      shinyApp(ui, server)


    } else {
      if(verbose){print(paste0(" .. choose another site"))}
    }
  }
}
