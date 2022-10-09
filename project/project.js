
function home() {
  

  var result = confirm("Home");
}

function about() {

  var result = confirm("Aarambh Solutions............... Developed by PraShant");
}
function contact() {

  var result = confirm("Prashant Navale Contact with Email ==> navaleprashant02170@gmail.com");
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  //document.getElementById("myDropdown2").classList.toggle("hide");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// second manu
function myFunction2() {
  //document.getElementById("myDropdown").classList.toggle("hide");
  document.getElementById("myDropdown2").classList.toggle("show");


  // document.getElementById("myDropdown").classList.toggle("hide"); 
  // document.getElementById("myDropdown2").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown2-content");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown = dropdowns2[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

