// Enlarge project image on click

var modal = document.getElementsByClassName("modal");
var modalImg = document.getElementsByClassName("modalImg");
var img = document.getElementsByClassName("projectImg");

function enlargeImage(projectIndex)
{
    modal[projectIndex].style.display = "block";
    modalImg[projectIndex].src = img[projectIndex].src;
}

function closeImage(projectIndex)
{
    modal[projectIndex].style.display = "none";
}



// Show navigation arrow when the webpage is scrolled down

$(window).scroll(function()
{
    if( $(this).scrollTop() > $("#home").height() )
    {
        $('#sideArrow').fadeIn();
    }
    else
    {
        $('#sideArrow').fadeOut();
        $('.appearingNavigation').fadeOut();
    }
});


// Show Navigation list after clicking on the arrow and on the next click hide the list

var clickCounter = 0;
var appearingNavigation = document.getElementsByClassName("appearingNavigation")[0];
var sideArrow = document.getElementById("sideArrow");

sideArrow.onclick = function()
{
    clickCounter++;
    if(clickCounter % 2 == 0) appearingNavigation.style.display = "none";
    else appearingNavigation.style.display = "inherit";
}

appearingNavigation.onclick = function()
{
    clickCounter++;
    appearingNavigation.style.display = "none";
}

function closest(e, t){ 
    return !e? false : e === t ? true : closest(e.parentNode, t);
}

var sideNav = document.getElementById("sideNav");

document.body.addEventListener("click", function(e) {
    if (!closest(e.target, sideNav)) {
        appearingNavigation.style.display = "none";
        clickCounter++;
    }
});
