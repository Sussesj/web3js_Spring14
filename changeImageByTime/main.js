var myImage = document.getElementById("mainImage");

var imageArray = ["img/PrototypeLightMyWay.jpg", "img/PrototypeLightMyWay2.jpg", "img/PrototypeLightMyWay3.jpg", "img/PrototypeLightMyWay4.jpg", "img/PrototypeLightMyWay5.jpg",
                    "img/PrototypeLightMyWay6.jpg"];

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

//set interval
setInterval(changeImage, 5000);











