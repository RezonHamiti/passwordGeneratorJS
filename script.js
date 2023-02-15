let passwordBtn = document.querySelector("#generate-pw-button");
let pwLeft = document.querySelector(".pw-container.left");
let pwRight = document.querySelector(".pw-container.right");
let copyLeft = document.querySelector("#copy-left");
let copyRight = document.querySelector("#copy-right");
let copyAlert = document.querySelector("#copy-alert");
let incNumbers = document.querySelector("#include-numbers");
let incChars = document.querySelector("#include-special-characters");

// characters for the generated password
let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// based on checkbox, include or exclude numbers/special chars from the result

function updatedCharacters() {
  if (incNumbers.checked) {
    characters = characters.concat([
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ]);
  } else {
    characters = characters.filter((char) => !/[0-9]/.test(char));
  }
  if (incChars.checked) {
    characters = characters.concat([
      "~",
      "`",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "{",
      "[",
      "}",
      "]",
      ",",
      "|",
      ":",
      ";",
      "<",
      ">",
      ".",
      "?",
      "/",
    ]);
    // if its unchecked the filter method removes the specified value
  } else {
    characters = characters.filter(
      (char) => !/[~`!@#$%^&*()_+\-={}\[\]|\\:;"'<>,.?\/]/.test(char)
    );
  }
}

// generate a random combination of characters
function generatePassword() {
  updatedCharacters();
  let passwordLeft = "";
  let passwordRight = "";
  for (let i = 0; i < 15; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    let randomChar = characters[randomNum];
    passwordLeft += randomChar;
  }
  for (let i = 0; i < 15; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    let randomChar = characters[randomNum];
    passwordRight += randomChar;
  }
  pwLeft.value = passwordLeft;
  pwRight.value = passwordRight;
}

// copy the password to one side based on input
function copyPasswordText(pwInput) {
  if (pwInput.value == null || pwInput.value == "") {
    copyAlert.textContent = "Generate a password first.";
  } else {
    pwInput.ariaSelected;
    pwInput.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(pwInput.value);
    copyAlert.textContent = pwInput.id + " password copied";
  }
}

copyLeft.addEventListener("click", function () {
  copyPasswordText(pwLeft);
});
copyRight.addEventListener("click", function () {
  copyPasswordText(pwRight);
});
passwordBtn.addEventListener("click", generatePassword);
