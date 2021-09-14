var slideIndex=0;
showSlides();


function showSlides(){
    var i;
    var slides = document.getElementByIdClassName("Myslides");
    for (i = 0; i < slides.length; i++) {
        slide [i].style.display ="block";
    setTimeout(showSlides,2000);
    }


}