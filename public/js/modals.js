// Written by Tyler Yep

let body = document.getElementsByTagName("body")[0];
let projects = document.getElementsByClassName("bubble");
let modal = document.getElementById("project-modal");

// When the user clicks on the button, open the modal
for (let i = 0; i < projects.length; i++) {
  projects[i].onclick = () => {
    zenscroll.to(document.getElementById("projects"));
    body.style.overflow = "hidden";

    let contentId = projects[i].id;
    const dash = contentId.indexOf("-");
    if (dash >= 0) {
      contentId = contentId.substring(0, dash);
    }
    loadModalContent(contentId);

    modal.style.display = "block";
    modal.style.opacity = "1";
  };
}

// When the user clicks on <span> (x), close the modal
let span = document.getElementsByClassName("close")[0];
span.onclick = () => {
  modal.style.display = "none";
  body.style.overflow = "auto";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
};

// Prevent deadlock with loading screen.
document.getElementById("body").classList.add("loaded");

const contentInfo = {
  edutech: {
    title: "EduTech",
    text:
      "I worked on this project with my teammates in EE 15N: The Art & Science of Engineering\
     Design. Our goal was to make a website for 8th grade Social Studies teachers to use to\
     incorporate more project-based learning in their classes.",
    image: "img/projects/edutech.jpg",
  },
  openproof: {
    title: "Openproof",
    text:
      "I learned a ton about web development and about working in a small\
    group to accelerate the new version of a 10+ year old Logic curriculum website.",
    image: "img/projects/openproof.jpg",
  },
  stanford: {
    title: "Stanford University",
    text:
      "This is my university, and where I have spent the past 3 years learning, growing, and thinking!\
    Here, I have met some of the most incredible people I have ever known, and have worked with esteemed\
    professors and researchers.",
    image: "img/projects/stanford.jpg",
  },
  cs198: {
    title: "CS 198: Section Leading",
    text:
      "I am a section leader for CS 106B, the second introductory CS course at Stanford!",
    image: "img/projects/cs198.png",
  },
  wolfbot: {
    title: "One Night Ultimate Werewolf AI: WolfBot",
    text:
      "The most exciting project I have worked on. Working with partner Harry Sha, for CS 221: Artificial Intelligence,\
    we created two game-playing AIs that could navigate a social game of lies and deceit, designing and adapting\
    machine learning algorithms to understand the game and choose optimal statements.",
    image: "img/projects/wolfbot.jpg",
  },
  intuit: {
    title: "Intuit Internship",
    text:
      "I worked here in the summer of 2018, working in the Payroll team (100+ people), to create a\
    UI automation framework that could be used by all Payroll subteams for regression testing!",
    image: "img/projects/intuit.png",
  },
  vhil: {
    title: "Virtual Human Interaction Lab",
    text:
      "I worked here during my Sophomore year, designing VR experiences for pHD research!",
    image: "img/projects/vhil.jpg",
  },
  bridgewater: {
    title: "Bridgewater Technology Associate",
    text: "I'm going to work here during my Junior year summer!",
    image: "img/projects/bridgewater.png",
  },
};

function loadModalContent(contentId) {
  let modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = "";

  const contentObj = contentInfo[contentId];
  const paragraph = createTag("p", {}, contentObj.text);
  const description = createTag("h2", {}, contentObj.title);
  modalBody.appendChild(
    createTag("img", { class: "modal-left", src: contentObj.image })
  );
  modalBody.appendChild(
    createTag("div", { class: "modal-right" }, [description, paragraph])
  );
}

function createTag(name, attrs, contents = "", isQuote = true) {
  const element = document.createElement(name);
  for (const attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      element.setAttribute(attr, attrs[attr]);
    }
  }
  // If contents is a single string or HTMLElement, make it an array of one
  // element; this guarantees that contents is an array below.
  if (!(contents instanceof Array)) contents = [contents];

  contents.forEach((piece) => {
    if (piece instanceof HTMLElement) {
      element.appendChild(piece);
    } else {
      // must create a text node for a raw string
      if (isQuote) element.appendChild(document.createTextNode(piece));
      else element.innerHTML += piece;
    }
  });
  return element;
}
