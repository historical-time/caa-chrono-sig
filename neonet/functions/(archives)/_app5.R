library(dplyr)

# TODO: editable table. show all records in one page. If not, it will clear the edition between two tabs


df <- read.table("http://mappaproject.arch.unipi.it/mod/files/140_140_id00140_doc_elencoc14.tsv", sep = "\t", header = T, quote = "")
mysite <- "Pokrovnik"
df.sample <- df[df$SiteName == mysite, ]
col.names <- c("SiteName", "Period", "PhaseCode", "LabCode", "C14Age", "C14SD", "Material", "MaterialSpecies")

df.sample <- df.sample[ , col.names]

df.sample$After <- NA

library(shiny)
library(DT)
library(dplyr)

ui <- fluidPage(
  titlePanel("NeoNet stratigraphy"),
  mainPanel(
    tabsetPanel(
      id = 'dataset',
      tabPanel("Site stratigraphy",
               textInput("mysite", "select a site name", value = "Pokrovnik"),
               DT::dataTableOutput("banking.df_data"),
               br(),
               ),
      tabPanel("All sites",
               DT::dataTableOutput("alldata")
      ))))

banking.df <- df.sample
d1 = banking.df

server <- function(input, output) {
  output$neonet_url <- renderText({
    "http://mappaproject.arch.unipi.it/mod/files/140_140_id00140_doc_elencoc14.tsv"
  })
  # d1 <- df
  output$banking.df_data <- renderDataTable(
    df.sample,
    selection = 'none',
    editable = TRUE,
    rownames = TRUE,
    extensions = 'Buttons',
    options = list(
      paging = TRUE,
      searching = TRUE,
      fixedColumns = TRUE,
      autoWidth = TRUE,
      ordering = TRUE,
      dom = 'Bfrtip',
      dom = "ft",
      pageLength = 10000,
      buttons = c('csv')
    ),
    class = "display"
  )
  observeEvent(input$banking.df_data_cell_edit, {
    df.sample[input$banking.df_data_cell_edit$row, input$banking.df_data_cell_edit$col] <<- input$banking.df_data_cell_edit$value
  })
  observeEvent(input$mysite, ignoreInit = TRUE, {
    mysite <- input$mysite
    mysite <- trimws(mysite)
    outFile <- paste0(mysite, "_", Sys.Date())
    # print(mysite)
    df.sample <- df[df$SiteName == mysite, ]
    df.sample <- df.sample[ , col.names]
    df.sample$After <- NA
    output$banking.df_data <- renderDataTable(
      df.sample,
      selection = 'none',
      editable = TRUE,
      rownames = TRUE,
      extensions = 'Buttons',
      options = list(
        paging = TRUE,
        searching = TRUE,
        fixedColumns = TRUE,
        autoWidth = TRUE,
        ordering = TRUE,
        dom = 'Bfrtip',
        dom = "ft",
        pageLength = 10000,
        buttons = list(
          list(extend = 'csv', filename = outFile),
          )
      ),
      class = "display"
    )
  })
  output$alldata <- renderDT(DT::datatable(
    df,
    extensions = 'Buttons',
    options = list(
      dom = 'Bfrtip',
      lengthMenu = list(c(100, 200, -1), c('100', '200', 'All')),
      pageLength = 100,
      buttons = list(
        list(
          extend = "collection",
          text = 'Show All',
          action = DT::JS("function ( e, dt, node, config ) {
                                    dt.page.len(-1);
                                    dt.ajax.reload();
                                }")))
      ))
  )
}

shinyApp(ui, server)
