Webcam.attach('#camera');
camera = document.getElementById("camera");
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality : 90
});

function take_snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
});
}
console.log('ml5 version',ml5.version);
//initalize the image classifier method with mobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Q8JP1E-Eu/model.json',modelLoaded);
//when the model is loaded 

function modelLoaded(){
console.log('model Loaded !');
}

function check(){
img = document.getElementById("selfie_image");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("result_object_name").innerHTML =results[0].label;
document.getElementById("result_object_accuarcy").innerHTML=results[0].confidence.toFixed(3);
}
}