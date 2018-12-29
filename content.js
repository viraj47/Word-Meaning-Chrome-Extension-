
chrome.runtime.onMessage.addListener(msg);
function msg(message,sender,sendResponse)
{
	if(message.txt=="search")
	{
selection = window.getSelection();
   var text=selection.toString();
   text = text.toLowerCase();
   console.log(text);
    console.log("hi");
    var requestURL = 'https://en.wiktionary.org/w/api.php?action=parse&prop=wikitext&format=json&page='+text+'#Verb';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
	request.send();
	request.onload = function() {
  var rawdata = request.response;
  rawdata=rawdata.parse.wikitext["*"];
  oraganized_rawdata=rawdata.split("===Noun===");
  var temp=oraganized_rawdata[1].split("#*");
  var meaning=temp[0];
  alert(meaning);
  //console.log(meaning);
}
}
}

