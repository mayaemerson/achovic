function loadForm() {
  var indexhtml = HtmlService.createTemplateFromFile("index");
  var indexoutput = indexhtml.evaluate();
indexoutput.setTitle("Lançamento de Passe").setHeight(550).setWidth(950);
  var ui = SpreadsheetApp.getUi();
  ui.showModalDialog(indexoutput, "Acos Vic");
  // ui.showSidebar(indexoutput); 
}

  function createMenu() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Menu");
  menu.addItem("Abrir Dashboard", "loadForm");
  menu.addToUi();
}

function onOpen() {
  createMenu()
}

