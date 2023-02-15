let passwordBtn = document.querySelector("#generate-pw-button");
let pwLeft = document.querySelector(".pw-container.left");
let pwRight = document.querySelector(".pw-container.right");
let copy


// characters for the generated password



const characters = [
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
];

function generatePassword() {
    let passwordLeft = "";
    let passwordRight = "";
    for (let i = 0; i < 16; i++) {
      let randomNum = Math.floor(Math.random() * characters.length);
      let randomChar = characters[randomNum];
      passwordLeft += randomChar;
    }
    for (let i = 0; i < 16; i++) {
        let randomNum = Math.floor(Math.random() * characters.length);
        let randomChar = characters[randomNum];
        passwordRight += randomChar;
      }
    pwLeft.value = passwordLeft;
    pwRight.value = passwordRight;
  }



 

passwordBtn.addEventListener("click", generatePassword);
