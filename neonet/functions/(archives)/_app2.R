library(dplyr)


df <- read.table("http://mappaproject.arch.unipi.it/mod/files/140_140_id00140_doc_elencoc14.tsv", sep = "\t", header = T, quote = "")
#

# mysite <- input$mysite
mysite <- "Pokrovnik"


df.sample <- df[df$SiteName == mysite, ]

col.names <- c("SiteName", "Period", "PhaseCode", "LabCode", "C14Age", "C14SD", "Material", "MaterialSpecies")

df.sample <- df.sample[ , col.names]

df.sample$After <- NA

library(shiny)
library(DT)
library(dplyr)

ui <- fluidPage(
  titlePanel("UC Berkley Admissions"),

  mainPanel(
    tabsetPanel(
      id = 'dataset',
      tabPanel("Sample Bank",
               # fluidRow(textOutput("neonet_url"),
               #          actionButton("loadBtn","Load")),
               # fileInput("file1", "Choose CSV File", accept = ".tsv"),
               textInput("mysite", "select a site name", value = "Pokrovnik"),
               DT::dataTableOutput("banking.df_data"),
               br(),
               actionButton("viewBtn","View"),
               br(),
               actionButton("saveBtn","Save"),
               br(),
               DT::dataTableOutput("updated.df")),
      tabPanel("All data",
               DT::dataTableOutput("alldata")
      ))))

# Admit<-c("Admitted","Rejected","Admitted", "Rejected", "Admitted", "Rejected", "Admitted",
#          "Rejected","Admitted", "Rejected", "Admitted","Rejected","Admitted", "Rejected","Admitted","Rejected", "Admitted", "Rejected",
#          "Admitted","Rejected", "Admitted" ,"Rejected","Admitted", "Rejected")
# Gender<-c("Male","Male","Female","Female", "Male",   "Male",   "Female", "Female", "Male","Male","Female","Female",
#           "Male","Male","Female","Female","Male",   "Male",   "Female", "Female","Male","Male","Female","Female")
# Dept<-c( "A","A", "A", "A", "B", "B", "B", "B", "C", "C", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "F", "F", "F", "F")
# Freq<-c("512", "313",  "89",  "19", "353", "207",  "17",   "8", "120", "205", "202", "391", "138", "279", "131", "244",  "53", "138",
#         "94", "299",  "22", "351",  "24", "317")

# banking.df<-data.frame(Admit,Gender,Dept, Freq,stringsAsFactors = FALSE)
banking.df <- df.sample
# df <- data.frame()
# banking.df <- data.frame()
d1 = banking.df
# d1$Date = Sys.time() + seq_len(nrow(d1))

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
      buttons = c('csv', 'excel')
    ),
    class = "display"
  )
  observeEvent(input$banking.df_data_cell_edit, {
    df.sample[input$banking.df_data_cell_edit$row, input$banking.df_data_cell_edit$col] <<- input$banking.df_data_cell_edit$value
  })

  view_fun <- eventReactive(input$viewBtn,{
    if(is.null(input$saveBtn)||input$saveBtn==0)
    {
      returnValue()
    }
    else
    {
      DT::datatable(df.sample, selection = 'none')
    }

  })
  observeEvent(input$saveBtn,{
    write.csv(df.sample,'test.csv')
  })
  observeEvent(input$mysite, ignoreInit = TRUE, {
    mysite <- input$mysite
    mysite <- trimws(mysite)
    print(mysite)
    df.sample <- df[df$SiteName == mysite, ]
    # col.names <- c("SiteName", "Period", "PhaseCode", "LabCode", "C14Age", "C14SD", "Material", "MaterialSpecies")
    df.sample <- df.sample[ , col.names]
    df.sample$After <- NA
    output$updated.df <- renderDataTable({
      view_fun()
    })
  })
  output$updated.df <- renderDataTable({
    view_fun()
  })
  output$alldata <- renderDT(DT::datatable(
    df,
    extensions = 'Buttons',
    options = list(
      dom = 'Bfrtip',
      lengthMenu = list(c(50, 200, -1), c('50', '200', 'All')),
      pageLength = 50,
      buttons = list(
        list(
          extend = "collection",
          text = 'Show All',
          action = DT::JS("function ( e, dt, node, config ) {
                                    dt.page.len(-1);
                                    dt.ajax.reload();
                                }")
        )))) # %>% DT::formatStyle(fontSize = '50%')
  )
}

shinyApp(ui, server)
