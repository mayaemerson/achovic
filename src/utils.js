var ss = SpreadsheetApp.openById (id);
var wscd = ss.getSheetByName("database");
var wsdash =  ss.getSheetByName("dash");
 
 var todayT = Utilities.formatDate(new Date(), "GMT-0300", "dd/MM/yyyy' 'HH:mm:ss")
 var today  = Utilities.formatDate(new Date(), "GMT-0300", "dd/MM/yyyy")
 var Ano = Utilities.formatDate(new Date(), "GMT-0300", "yyyy")
 var Mes = Utilities.formatDate(new Date(), "GMT-0300", "MM")
 var Dia = Utilities.formatDate(new Date(), "GMT-0300", "dd")
 var horaminut = Utilities.formatDate(new Date(), "GMT-0300", "HH:mm:ss")



function include(callsrc){
  return HtmlService.createHtmlOutputFromFile(callsrc).getContent()
    }