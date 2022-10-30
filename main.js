Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

cam = document.getElementById("camera") ;

Webcam.attach("camera") ;

function tsn() 
{
    Webcam.snap(function(data_uri) 
    {
        document.getElementById("result").innerHTML = '<img id="img" style="height : 250px; width : 350px;" src="' + data_uri + '">' ;
    });
}

console.log("ml5 : " + ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h-xO9eW4Z/model.json',modelLoaded);

function modelLoaded() 
{
    console.log("Model Loaded");
}

function check() 
{
    img =  document.getElementById("img") ;
    classifier.classify(img, gotResult) ;
}

function gotResult(error, results) 
{
    if (error) 
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        document.getElementById("objn").innerHTML = results[0].label ;
        document.getElementById("obja").innerHTML = results[0].confidence.toFixed(3) ;
    }
}