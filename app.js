// Hecho por mi
// se que no es viable manejando gran cantidad de fotos pero me siento orgulloso de lograrlo por mi mismo para cumplir con el ejercicio
function upDate(previewPic) {
    // cambia el texto
    var filtro= previewPic.alt
    document.getElementById('image').innerHTML = previewPic.alt; 
    
    // cambia a imagen 1
    if (filtro === "Styling with a Bandana") {               
        var div = document.getElementById("image");
        div.style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";
        console.log("dentro de imagen 1");
    // cambia a imagen 2
    } else if (filtro === "With My Boy") {
        var div = document.getElementById("image");
        div.style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG')";
        console.log("dentro de imagen 2");
    // cambia a imagen 3
    } else if (filtro === "Young Puppy") {
        var div = document.getElementById("image");
        div.style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg')";
        console.log("dentro de imagen 3");
    }
}

function unDo() {
    var div = document.getElementById("image");
    div.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML='Hover over an image below to display here.';
}







//otras maneras mas eficiente de hacerlo


/*
actualización de la función (imagen de vista previa) {
    x=document.getElementById('imagen');
    x.innerHTML=imagen previa.alt;
    x.style.backgroundImage='url('+previewPic.src+')';
}

función deshacer(){
    x=document.getElementById('imagen');
	x.innerHTML="Pase el cursor sobre una imagen para mostrarla aquí";
    x.style.backgroundImage="url('')";
}
*/




/*
function upDate(previewPic){    
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById('image').innerHTML = previewPic.alt;
     
       }
   
       function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
       
       }
*/





/*
function upDate(previewPic){
}
   
function upDate(previewPic){
   var src = previewPic.getAttribute( "src" );
   var alt = previewPic.getAttribute( "alt" );
   document.getElementById('image').style.backgroundImage = "url('" + src + "')";
   document.getElementById('image').innerHTML = alt;
}

	function unDo(){
	}

function unDo(X){
   X = document.getElementById('image');
   X.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here";
}
*/






/*
function upDate(element){
  document.getElementById('image').innerHTML= element.alt;
  image.style.backgroundImage = "url("+element.src+")";
  //document.getElementById('image').innerHTML = "<img src='"+element.src+"'>";
 //'url(http://localhost/background.png)'
}

function unDo(element){
  document.getElementById('image').innerHTML = "Hover over an image below to display here."
  image.style.backgroundImage = "url()";
}
*/