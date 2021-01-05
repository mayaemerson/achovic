function loadPartialHTML_(partial){
  const htmlSv = HtmlService.createTemplateFromFile(partial);
  return htmlSv.evaluate().getContent();
}

function loadDashboardView(){
return loadPartialHTML_("dashboard");
}
function loadPasseView(){
return loadPartialHTML_("passe");
}
function loadSearchView(){
return loadPartialHTML_("search");
}