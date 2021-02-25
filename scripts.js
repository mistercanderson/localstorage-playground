/* Use this area for pseudo - coding:



*/

// Query selectors
var buttons = {
  register: document.getElementById('register-btn'),
  display: document.getElementById('display-btn')
};
var inputs = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
};
var containers = {
  display: document.querySelector('.display-area'),
  form: document.querySelector('form')
}
var contacts = [];

// Event listeners
containers.form.addEventListener('click', formFunctions);
window.addEventListener('load', displayContacts);



// Functions
function formFunctions() {
  addContact();
  displayContacts();
};

function addContact() {
  debugger
  if (event.target === buttons.register) {
    var contact = {
      name: inputs.name.value,
      email: inputs.email.value
    };
    if (!contacts.includes(contact)) {
      contacts.push(contact);
      localStorage.setItem(`${contact.name}`, JSON.stringify(contact));
    };
    renderContacts()
  };
};

function displayContacts() {
  if (event.target === buttons.display ||
    event.currentTarget === window) {
    contacts = [];
    var keys = Object.keys(localStorage)
    for (var i = 0; i < keys.length; i++) {
      var contact = JSON.parse(localStorage.getItem(keys[i]));
      contacts.push(contact)
    };
  };
  renderContacts()
};


function renderContacts() {
  containers.display.innerHTML = '';
  for (var i = 0; i < contacts.length; i++) {
    containers.display.innerHTML += `
    <div class="contact-card">
    <h4>${contacts[i].name}</h4>
    <h5>${contacts[i].email}</h5>
    </div>
    `
  };
};
