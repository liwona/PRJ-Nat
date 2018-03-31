$(document).ready(function () {
    listener();
});
//komentarz obejmuje tylko linie
/* to też jest komentarz*/

//$(document).ready(function(){
//console.log('Wernor');
//});

/* Dynamic top menu positioning
 *
 */

var num = 0; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

//USE SCROLL WHEEL FOR THIS FIDDLE DEMO

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     $('.dropbtn').on('click', function (){
//         var klikniety = $(this).data('klikniety');
//         console.log(klikniety);
//         // document.getElementById("myDropdown_"+klikniety).classList.toggle("show");
//     });
// }

function listener() {
    $('.dropbtn').on('click', function () {
        var klikniety = $(this).data('klikniety');
        $("#myDropdown_" + klikniety).toggleClass('my_dropdown_show');
    });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    console.log(dropdowns, dropdowns.length);
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
