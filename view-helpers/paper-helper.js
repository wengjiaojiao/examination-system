var hbs = require('express-hbs');
var constant = require('../config/back-constant.json');
hbs.registerHelper('blank', function(options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var questionNo = i + 1;
    text += "<h4>" + questionNo + ' . ' + options[i].content +  "</h4>\n"
          + "<input type='text' name=" + options[i].id + " value=''></br>";
  }
  return new hbs.SafeString(text);
});

hbs.registerHelper('singleChoice', function(options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var questionNo = i + 1;
    text += "<h4>" + questionNo + ' . ' + options[i].content + "</h4>\n";
    for (var j = 0; j < options[i].options; j++) {
      var choiceNumber = String.fromCharCode(constant.ASCII_A + j);
      text += "<input type='radio' name=" + options[i].options[j] + "value=" + choiceNumber + ">" + choiceNumber + '\n';
    }
  }
  return new hbs.SafeString(text);
});

hbs.registerHelper('multipleChoice', function(options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var questionNo = i + 1;
    text += "<h4>" + questionNo + ' . ' + options[i].content +  "</h4>\n";
    for(var j = 0; j < options[i].options.length;j++){
      var choiceNumber = String.fromCharCode(constant.ASCII_A+j);
      text += "<h4><input type='checkbox' name="+options[i].options[j]+"value="+choiceNumber+">"+choiceNumber+'.'+options[i].options[j]+'</h4>';
    }
  }
  return new hbs.SafeString(text);
});
