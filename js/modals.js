// Written by Tyler Yep

let body = document.getElementsByTagName('body')[0];
let projects = document.getElementsByClassName('bubble');
let modal = document.getElementById('project-modal');

// When the user clicks on the button, open the modal
for (let i = 0; i < projects.length; i++) {
  projects[i].onclick = () => {
    zenscroll.to(document.getElementById('projects'));
    body.style.overflow = 'hidden';

    let contentId = projects[i].id;
    const dash = contentId.indexOf('-');
    if (dash >= 0) {
      contentId = contentId.substring(0, dash);
    }
    loadModalContent(contentId);

    modal.style.display = 'block';
    modal.style.opacity = '1';
  }
}

// When the user clicks on <span> (x), close the modal
let span = document.getElementsByClassName('close')[0];
span.onclick = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
  }
}

const contentInfo = {
  'edutech' : {
    'title' : 'EduTech',
    'text' : 'This was a fun project!',
    'image' : 'img/projects/edutech.jpg'
  },
  'openproof' : {
    'title' : 'Openproof',
    'text' : 'This was a fun project! I learned a ton about web development and lots of other things.',
    'image' : 'img/projects/openproof.jpg'
  },
  'stanford' : {
    'title' : 'Stanford University',
    'text' : 'This was a fun school!',
    'image' : 'img/projects/stanford.jpg'
  },
  'cs198' : {
    'title' : 'CS 198: Section Leading',
    'text' : 'This was a fun job!',
    'image' : 'img/projects/cs198.png'
  },
  'wolfbot' : {
    'title' : 'One Night Ultimate Werewolf AI: WolfBot',
    'text' : 'Tyler Yep',
    'image' : 'img/projects/wolfbot.jpg'
  },
  'intuit' : {
    'title' : 'Intuit Internship',
    'text' : 'This was a fun job!',
    'image' : 'img/projects/intuit.png'
  },
  'vhil' : {
    'title' : 'Virtual Human Interaction Lab',
    'text' : 'This was a fun job!',
    'image' : 'img/projects/vhil.jpg'
  }
}

function loadModalContent(contentId) {
  let modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = '';

  const contentObj = contentInfo[contentId];
  const paragraph = createTag('p', {}, contentObj.text);
  const description = createTag('h2', {}, contentObj.title);
  modalBody.appendChild(createTag('div', {class: 'modal-left'}, [description, paragraph]));
  modalBody.appendChild(createTag('img', {class: 'modal-right', src: contentObj.image}));
}

function createTag(name, attrs, contents = '', isQuote = true) {
  const element = document.createElement(name);
  for (const attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      element.setAttribute(attr, attrs[attr]);
    }
  }
  // If contents is a single string or HTMLElement, make it an array of one
  // element; this guarantees that contents is an array below.
  if (!(contents instanceof Array)) contents = [contents];

  contents.forEach(piece => {
    if (piece instanceof HTMLElement) {
      element.appendChild(piece);
    } else {
      // must create a text node for a raw string
      if (isQuote) element.appendChild(document.createTextNode(piece));
      else element.innerHTML += piece;
    }
  });
  return element;
};
