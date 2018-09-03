// Written by Tyler Yep

let body = document.getElementsByTagName("body")[0];
let projects = document.getElementsByClassName("bubble");
let modal = document.getElementById("modal");

// When the user clicks on the button, open the modal
for (let i = 0; i < projects.length; i++) {
  projects[i].onclick = () => {
    zenscroll.to(document.getElementById("projects"));
    body.style.overflow = "hidden";

    // Load modal content
    let modalBody = document.getElementById("modal-body");
    // modalBody.innerHTML = "";
    console.log(projects[i].id);

    modal.style.display = "block";
    modal.style.opacity = "1";
  }
}

// When the user clicks on <span> (x), close the modal
let span = document.getElementsByClassName("close")[0];
span.onclick = () => {
  modal.style.display = "none";
  body.style.overflow = "auto";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
}
