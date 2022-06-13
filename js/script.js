
function openResources(evt, section) {
    var i, main_section, navlink;
    main_section = document.getElementsByClassName("main-section");
    for (i = 0; i < main_section.length; i++) {
      main_section[i].style.display = "none";
    }



    navlink = document.getElementsByClassName("navlink");
    for (i = 0; i < navlink.length; i++) {
     
      navlink[i].className = navlink[i].className.replace("active", "");

   
    }
    document.getElementById(section).style.display = "block";
    evt.currentTarget.className += "active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  //active button
//   var navbar = document.getElementById("navbar");
// var nav_link =navbar.getElementsByClassName("nav-link");
// for (var i = 0; i < nav_link.length; i++) {
//   nav_link[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }