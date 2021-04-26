// all smooth scrool but not supported by some browsers 
// "stytle.css"
/* html {
  scroll-behavior: smooth;
} */


// all smooth scrool
const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

for (let index = 0; index < smoothScrollAnchor.length; index++) {
  const e = smoothScrollAnchor[index];

  e.addEventListener("click", function(event){
    event.preventDefault();

    if (document.getElementById(this.getAttribute("href").replace("#", ""))) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
      
    }

  })
  
}