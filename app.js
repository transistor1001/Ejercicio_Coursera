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