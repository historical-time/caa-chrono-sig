# site.to.edit <- "Pokrovnik"

d1 <- df.site.to.edit # this df has been created by neo_strat_edit.R

cwd <- dirname(rstudioapi::getActiveDocumentContext()$path)
# rstudioapi::jobRunScript(path = paste0(cwd, "/editabledata_test.R"), importEnv = TRUE)
source(paste0(cwd, "/neo_strat.R"))

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
