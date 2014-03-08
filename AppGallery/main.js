var imgArr = document.getElementById('images').getElementsByTagName('img');

//Hide all images except first
for (var i = 1; i < imgArr.length; i++) {
    imgArr[i].style.display = "none";
}
i = 0;

document.getElementById('prev').onclick = function () {
    if (i === 0) {
        imgArr[i].style.display = "none";
        i = imgArr.length - 1;
        imgArr[i].style.display = "";
    } else {
        imgArr[i].style.display = "none";
        i--;
        imgArr[i].style.display = "";
    }
}

document.getElementById('next').onclick = function () {
    if (i === imgArr.length - 1) {
        imgArr[i].style.display = "none";
        i = 0;
        imgArr[i].style.display = "";
    } else {
        imgArr[i].style.display = "none";
        i++;
        imgArr[i].style.display = "";
    }
}













