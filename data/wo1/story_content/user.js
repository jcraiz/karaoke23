function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67DK1xcNRYj":
        Script1();
        break;
      case "6F6H9olcMFz":
        Script2();
        break;
      case "6WvKkhJjAz7":
        Script3();
        break;
      case "5VTuWaoL9r2":
        Script4();
        break;
      case "5biwpeUt0jy":
        Script5();
        break;
      case "5n8t3rRIUMF":
        Script6();
        break;
      case "5aTum46jVJj":
        Script7();
        break;
      case "5VEGtDmbyr0":
        Script8();
        break;
      case "5eH16yEpmwb":
        Script9();
        break;
      case "6hxER3DDgBw":
        Script10();
        break;
      case "6kdhvYXPBEW":
        Script11();
        break;
      case "6hri6zWrnbu":
        Script12();
        break;
      case "6WGEeIJKi85":
        Script13();
        break;
      case "5fXZJRTBXEV":
        Script14();
        break;
      case "6TPsk0nvIOw":
        Script15();
        break;
      case "5uVfCVLtzcN":
        Script16();
        break;
      case "5ci2yA3wf6X":
        Script17();
        break;
      case "5yfcVlAPmE4":
        Script18();
        break;
      case "62OaNLu5tel":
        Script19();
        break;
      case "5njD2xO5yGO":
        Script20();
        break;
      case "6YNVIiXhvDw":
        Script21();
        break;
      case "61cWkBtwQAG":
        Script22();
        break;
      case "6Y91BLv8vRC":
        Script23();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyBmjyBFMR5X0qnBLpNqwEAJEE8SIAEsQr4IAShYt4peNmC_jyaugNnKOxLIWEHAiNZ1Q/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "Name" : player.GetVar("Name"),
 "Email" : player.GetVar("Email"),
"ID" : player.GetVar("ID"),
"ContadorTotal" : player.GetVar("ContadorTotal"),
"Time" : player.GetVar("Time")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script4()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived1",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script5()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived2",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script6()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived3",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script7()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived4",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script8()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived5",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script9()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived6",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script10()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived7",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script11()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived8",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script12()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived9",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script13()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived10",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script14()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived11",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script15()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived12",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script16()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived13",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script17()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived14",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script18()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived15",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script19()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived16",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script20()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived17",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script21()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived18",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script22()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived19",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

function Script23()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-GB';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {

    var speechResult = event.results[0][0].transcript;
 //return speech and change storyline variable with a result
    var player = GetPlayer();
    player.SetVar("SpeechReceived20",speechResult);  
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    console.log('Speech ended!');
  }

  recognition.onerror = function(event) {
 console.log('Error occurred in recognition: ' + event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition can't recognise speech
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when no sound present
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when speech starts
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening
      console.log('SpeechRecognition.onstart');
  }
}

