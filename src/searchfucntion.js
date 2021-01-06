
  //const ss = SpreadsheetApp.getActiveSpreadsheet();
  //const ws = ss.getSheetByName("db");
  //wscd.getRange(2,1, wscd.getLastRow()-1,3).getValues();
function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("database");
  return ws.getRange(2,1, ws.getLastRow()-1,3).getValues();


  }
