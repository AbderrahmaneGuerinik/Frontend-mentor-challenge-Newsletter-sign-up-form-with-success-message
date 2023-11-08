
const input = document.getElementById("email");
const form = document.getElementById("form");
const invalid = document.getElementById("invalid");
let s = document.getElementById("s");
let d = document.getElementById("d");
let link = document.getElementById("link");
const dimiss = document.getElementById("dimiss");

form.addEventListener("submit",onsubmit);
dimiss.addEventListener("click",ondimiss);

function onsubmit(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if(!isValidEmail(email)) {
    invalid.style.display = "block";
    invalid.classList.add("error-text");
    input.classList.add("error-input");
  } else {  
    s.style.display = "none";
    link.href="main2.css";
    d.style.display= "block"; 
  } 
}
 
function ondimiss() {
  link.href = "main.css";
  d.style.display = "none";
  s.style.display = "flex";
  
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
