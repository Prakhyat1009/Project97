function convert(){
var synth = window.speechSynthesis;

text = document.getElementById("textbox").value;
reap_text= new SpeechSynthesisUtterance(text);
synth.speak(reap_text);

document.getElementById("textbox").value="";
}

function home3(){
    window.location="index.html";
    }