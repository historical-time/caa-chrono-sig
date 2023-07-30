library("shiny")

ui <- fluidPage(
  uiOutput('model'),
  textInput('search', 'Look for a model')
)


server <- function(input, output, session) {

  options <- c('a', 'b', 'c', 'd')

  output$model <- renderUI({
    checkboxGroupInput("model",
                       "Select a model:",
                       options,
                       selected='a')
  })

  observeEvent(input$search, ignoreInit = TRUE, {
    updateCheckboxGroupInput(session,"model",
                             "Select a model:",
                             options[grep(input$search, options)])
  })

}

shinyApp(ui = ui, server = server)
