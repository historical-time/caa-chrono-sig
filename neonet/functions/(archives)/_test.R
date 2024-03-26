library(dplyr)


# df <- read.table("http://mappaproject.arch.unipi.it/mod/files/140_140_id00140_doc_elencoc14.tsv", sep = "\t", header = T, quote = "")
df <- read.table("140_140_id00140_doc_elencoc14.tsv", sep = "\t", header = T, quote = "")


mysite <- "Pokrovnik"

df.sample <- df[df$SiteName == mysite, ]

col.names <- c("SiteName", "Period", "PhaseCode", "LabCode", "C14Age", "C14SD", "Material", "MaterialSpecies")

df.sample <- df.sample[ , col.names]

df.sample$After <- NA


###############################


# reset if TRUE
from.scratch <- T

if(from.scratch){

  lcul_col <- list(# colors
    EM = "#0000CF", # BLUE
    MM = "#1D1DFF", #
    LM = "#3737FF", #
    LMEN = "#6A6AFF", #
    UM = "#8484FF", #
    EN = "#FF1B1B", # RED
    EMN = "#FF541B", #
    MN = "#FF8D1B", #
    LN = "#FFC04D", #
    UN = "#E7E700" # NEO UNDEF.
  )

  df.colors.per <- as.data.frame((stack(lcul_col)))
  df.colors.per$name <- c("Early Mesolithic",
                          "Middle Mesolithic",
                          "Late Mesolithic",
                          "Late Mesolithic/Early Neolithic",
                          "Undefined Mesolithic",
                          "Early Neolithic",
                          "Early/Middle Neolithic",
                          "Middle Neolithic",
                          "Late Neolithic",
                          "Undefined Neolithic")
  names(df.colors.per)[names(df.colors.per) == 'ind'] <- 'period'
  names(df.colors.per)[names(df.colors.per) == 'values'] <- 'color'
  names(df.colors.per)[names(df.colors.per) == 'name'] <- 'period_full_name'
  df.colors.per <- df.colors.per[ , c(2, 3, 1)]
  write.table(df.colors.per, "C:/Rprojects/neonet/doc/img/periods.tsv", sep = "\t", row.names = F)
} else {
  # TODO: read a TSV dataframe
  # pass
  df.colors.per <- read.table("https://raw.githubusercontent.com/zoometh/neonet/main/doc/img/periods.tsv", header = T)
}


df.colors.per[ , c(3)] <- kableExtra::cell_spec(df.colors.per[, c(3)], color = df.colors.per$color)
dt <- knitr::kable(df.colors.per, format = "html",
                   row.names = F,
                   booktabs = T,
                   escape = F,
                   align = "l") %>%
  kableExtra::kable_styling(full_width = FALSE,
                            position = "center",
                            font_size = 20)

readr::write_file(dt, "C:/Rprojects/neonet/doc/img/periods.html")
