
  function getDataForSearch() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("db");
    ws.getRange(2,1, ws.getLastRow()-1,3).getValues();
  }
