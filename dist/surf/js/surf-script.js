function plusSlides(a){showSlides(slideIndex+=a)}function currentSlide(a){showSlides(slideIndex=a)}function showSlides(a){var b,c=document.getElementsByClassName("mySlides"),d=document.getElementsByClassName("dot");for(a>c.length&&(slideIndex=1),a<1&&(slideIndex=c.length),b=0;b<c.length;b++)c[b].style.display="none";for(b=0;b<d.length;b++)d[b].className=d[b].className.replace(" active","");c[slideIndex-1].style.display="block",d[slideIndex-1].className+=" active"}var slideIndex=1;showSlides(slideIndex);