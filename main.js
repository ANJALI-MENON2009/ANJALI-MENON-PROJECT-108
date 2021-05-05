camera = document.getElementById("camera") ;
Webcam.set({
    width: 360,
    height: 270,
    image_format: 'jpeg' ,
    jpeg_quality: 90 
}) ;
Webcam.attach(camera) ;
function takeSnapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="resultImage" src='+data_uri+'>'+ '<br>' + '<br>' + '<button style="background-color:white ;color: black; font-weight: bolder; border:1px solid black;border-radius: 20px;width:150px;height:50px;" id="identifyBtn" onclick="identifyGesture();"> Identify Gesture' + "</button>" ;
    }) ;
} 


console.log("ml5 version is:" + ml5.version) ;
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zjU-lLKbZ/model.json' , modelIsLoaded) ;

function modelIsLoaded()
{
    alert("You can start clicking the photos!") ;
    console.log("Model is loaded now") ;
}

function identifyGesture(){
    image = document.getElementById("resultImage") ;
    classifier.classify(image, identify) ;
}
function identify(error, result)
 {
if(error) 
    {
console.error ; 
    } 
    else
    { console.log(result) ;
        document.getElementById("pred1").innerHTML = '<h3 id="h3tag">Prediction 1 is' + '</h3>' + '<hr>' + result[0].label;
        document.getElementById("pred2").innerHTML =  '<h3 id="h3tag">Prediction 2 is' + '</h3>' + '<hr>' + result[1].label ;
        result0 = result[0].label ;
        result1 = result[1].label ;

        if(result0=="Thumbs Up") {
            document.getElementById("pred1").innerHTML = '<h3 id="h3tag">Prediction 1 is' + '</h3>' + '<hr>' + result[0].label +  " 👍";
            var meaning1 = "The meaning of this gesture is good or Best of Luck." ;
            var synth = window.speechSynthesis ;
            var utterThis = new SpeechSynthesisUtterance(meaning1) ;
            synth.speak(utterThis) ;
        }
        if(result0=="Thumbs down") {
            document.getElementById("pred1").innerHTML = '<h3 id="h3tag2">Prediction 1 is' + '</h3>' + '<hr>' + result[0].label +  " 👎";
            var meaning2 = "The meaning of this gesture is sad or dislike." ;
            var synth = window.speechSynthesis ;
            var utterThis = new SpeechSynthesisUtterance(meaning2) ;
            synth.speak(utterThis) ;
        }
        if(result0=="Victory") {
            document.getElementById("pred1").innerHTML = '<h3 id="h3tag2">Prediction 1 is' + '</h3>' + '<hr>' + result[0].label +  " ✌️";
            var meaning3 = "The meaning of this gesture is victory or peace" ;
            var synth = window.speechSynthesis ;
            var utterThis = new SpeechSynthesisUtterance(meaning3) ;
            synth.speak(utterThis) ;
        }
        if(result0=="Superb") {
            document.getElementById("pred1").innerHTML = '<h3 id="h3tag">Prediction 1 is' + '</h3>' + '<hr>' + result[0].label +  " 👌";
            var meaning4 = "The meaning of this gesture is very good or super" ;
            var synth = window.speechSynthesis ;
            var utterThis = new SpeechSynthesisUtterance(meaning4) ;
            synth.speak(utterThis) ;
        }
        if(result0=="Swag/Rock on") {
            document.getElementById("pred1").innerHTML = '<h3 id="h3tag">Prediction 1 is' + '</h3>' + '<hr>' + result[0].label +  " 🤘";
            var meaning5 = "The meaning of this gesture is rock on." ;
            var synth = window.speechSynthesis ;
            var utterThis = new SpeechSynthesisUtterance(meaning5) ;
            synth.speak(utterThis) ;
        }
        if(result1=="Thumbs Up") {
            document.getElementById("pred2").innerHTML = '<h3 id="h4tag">Prediction 2 is' + '</h3>' + '<hr>' + result[1].label +  " 👍";    
        }
        if(result1=="Thumbs down") {
            document.getElementById("pred2").innerHTML = '<h3 id="h4tag2">Prediction 2 is' + '</h3>' + '<hr>' + result[1].label +  " 👎";
        }
        if(result1=="Victory") {
            document.getElementById("pred2").innerHTML = '<h3 id="h4tag2">Prediction 2 is' + '</h3>' + '<hr>' + result[1].label +  " ✌️";  
        }
        if(result1=="Superb") {
            document.getElementById("pred2").innerHTML = '<h3 id="h4tag">Prediction 2 is' + '</h3>' + '<hr>' + result[1].label +  " 👌";
        }
        if(result1=="Swag/Rock on") {
        }
     }
 }