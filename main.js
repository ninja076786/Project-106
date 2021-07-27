var answer="";

Webcam.set({
    width:"350",
    height:"300",
   image_format:"png",
   png_quality:120,
    });
   
     var camera = document.getElementById("cam");
   
       Webcam.attach("#camera");

function snap(){
Webcam.snap(function data_url(){
document.getElementById("outi").innerHTML='<img id="imagecap" src="'+data_url+'">'
});
}
