let projectDiv = document.getElementById("openproof");
let modal = document.getElementById("openproof-modal");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
projectDiv.onclick = () => {
  zenscroll.to(document.getElementById("projects"));
  modal.style.display = "block";
  modal.style.opacity = "1";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
