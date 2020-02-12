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
    if(clickCounter % 2 == 0)
    {
        appearingNavigation.style.display = "none";
        sideArrow.style.borderBottomLeftRadius = "5px";
        sideArrow.style.borderTopLeftRadius= "5px";
    }
    else
    {
        appearingNavigation.style.display = "inherit";
        sideArrow.style.borderBottomLeftRadius = "0px";
        sideArrow.style.borderTopLeftRadius = "0px";
    }
}

appearingNavigation.onclick = function()
{
    clickCounter++;
    appearingNavigation.style.display = "none";
}
