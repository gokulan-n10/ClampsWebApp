//login & register--------------------------------------------------------------------------------------
// Function to get user data from localStorage
function getUsersFromLocalStorage() {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
}

// Function to save user data to localStorage
function saveUsersToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Array to store registered users
let users = getUsersFromLocalStorage();
console.log(users);

// Function to register a new user
function registerUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const passwordHint = document.getElementById("passwordHint").value;
  const securityQuestion = document.getElementById("securityQuestion").value;
  const securityAnswer = document.getElementById("securityAnswer").value;

  // Validate password match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // Validate unique email
  if (isEmailUnique(email)) {
    alert("Email is already registered. Please use a different email.");
    return;
  }

  // Validate unique phone number
  if (isPhoneNumberUnique(phoneNumber)) {
    alert("Phone number is already registered. Please use a different number.");
    return;
  }

  // Create a new user object
  const newUser = {
    id: generateUniqueId(),
    username,
    email,
    password,
    phoneNumber,
    passwordHint,
    securityQuestion,
    securityAnswer,
  };

  // Add the new user to the array
  users.push(newUser);
  console.log(users);
  saveUsersToLocalStorage(users);
  alert("Registration successful!");
  document.getElementById("registrationForm").reset();
  window.location.href = "login.html";
}

// Function to check if the email is unique
function isEmailUnique(email) {
  return users.some((user) => user.email === email);
}

// Function to check if the phone number is unique
function isPhoneNumberUnique(phoneNumber) {
  return users.some((user) => user.phoneNumber === phoneNumber);
}

// Function to generate a unique ID (simple increment for demonstration purposes)
function generateUniqueId() {
  return users.length + 1;
}

// Function to log in a user
function login() {
  console.log(users);
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  const user = users.find((user) => user.email === loginEmail);

  if (!user || user.password !== loginPassword) {
    alert("Invalid email, password, security question, or security answer. Please try again.");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  window.location.href = "welcome.html";
}

// Tab switching --------------------------------------------------------------------------------------
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Toggle light/dark mode -----------------------------------------------------------------------------
function darkMode() {
  var element = document.body;
  element.classList.toggle("light-mode");

  const body = document.querySelector('body');
  body.style.backgroundColor = 'black';
  body.style.color = "white";

  const div = document.querySelector('div');
  div.style.backgroundColor = 'black';

  const logo = document.querySelector('header');
  logo.style.backgroundColor = 'black';
}


module.exports = { darkMode };

function lightMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  const body = document.querySelector('body');
  body.style.backgroundColor = 'white';
  body.style.color = "black";

  const div = document.querySelector('div');
  div.style.backgroundColor = 'white';

  const logo = document.querySelector('header');
  logo.style.backgroundColor = 'white';

  
}


// Password strength indicator ------------------------------------------------------------------------
var myInput = document.getElementById("ep");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

myInput.onkeyup = function () {
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};

// Entry submission and navigation --------------------------------------------------------------------
function submitEntry() {
  window.location.href = "clamps.html";
}

function newEntry() {
  window.location.href = "new_entry.html";
}

// Entry data handling --------------------------------------------------------------------------------
function getEntriesFromLocalStorage() {
  const storedEntries = localStorage.getItem("entries");
  return storedEntries ? JSON.parse(storedEntries) : [];
}

function saveEntriesToLocalStorage(entries) {
  localStorage.setItem("entries", JSON.stringify(entries));
}

let entries = getEntriesFromLocalStorage();
console.log(entries);

function registerEntries() {
  const entryName = document.getElementById("passwordname").value;
  const entryPassword = document.getElementById("ep").value;
  const entryAccountPassword = document.getElementById("eap").value;
  const loginPassword = document.getElementById("password").value;

  if (loginPassword !== entryAccountPassword) {
    alert("Incorrect account password. Please try again.");
    return;
  }

  if (isEntryUnique(entryName)) {
    alert("Entry name is already registered. Please use a different entry name.");
    return;
  }

  const newEntry = {
    id: generateUniqueId2(),
    entryName,
    entryPassword,
    entryAccountPassword,
    loginPassword,
  };

  entries.push(newEntry);
  console.log(newEntry);
  saveEntriesToLocalStorage(newEntry);
  alert("Entry created successfully!");
  window.location.href = "clamps.html";
}

function isEntryUnique(entryName) {
  return entries.some((entry) => entry.entryName === entryName);
}

function generateUniqueId2() {
  return entries.length + 1;
}

// Search functionality ------------------------------------------------------------------------------
function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Automatically open Home tab ----------------------------------------------------------------------
window.onload = function () {
  document.getElementById("defaultOpen").click();
};