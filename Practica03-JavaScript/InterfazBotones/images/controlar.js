
var imageArray = ["images/foto1.jpg","images/foto2.jpg","images/foto3.jpg","images/foto4.jpg","images/foto5.jpg","images/foto6.jpg","images/foto7.jpg","images/foto8.jpg","images/foto9.jpg","images/foto10.jpg"];
var imageArray2 = ["images/foto1.jpg","images/foto2.jpg","images/foto3.jpg","images/foto4.jpg","images/foto5.jpg"];
var imageIndex = 0;
function iniciar() {
    var imageIndex = 0;
    var num = 0;
    imageArray2 = [];
        
        for (let i = 0; i < 5; i++) {
            num = parseInt(Math.random()*(5-0)+0);
            console.log(num);
            
            imageArray2.push(imageArray[num]);
        
    }
    var myImage = document.getElementById('f1').setAttribute("src",imageArray2[0]);
    console.log(imageArray2);
    
}
function adelante() {
    console.log("amtes"+imageIndex);
    imageIndex++;
    console.log("despues"+imageIndex);
    if (iniciar() === true) {
        console.log
    }
    if (imageIndex >= 5) {
        console.log();
        
    }else{
        var myImage = document.getElementById('f1').setAttribute("src",imageArray2[imageIndex]);
    }
}
function anterior() {
    imageIndex--;
    if (imageIndex < 0) {
        console.log();
    } else {
        var myImage = document.getElementById('f1').setAttribute("src",imageArray2[imageIndex]);
    }
}

