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

let generateButtonEl = document.querySelector("#generate-btn");
let passwordLength = 15;
let result1EL = document.querySelector("#result-1");
let result2EL = document.querySelector("#result-2");
let toggleEl = document.querySelector("#toggle-btn");
let isToggled = false;

function generate() {
  let result = "";
  let charLength;

  if (isToggled === false) {
    charLength = characters.length;
  } else {
    charLength = 52;
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomInput = Math.floor(Math.random() * charLength);
    let randomChar = characters[randomInput];
    result += randomChar;
  }
  return result;
}

function displayField() {
  let inputField1 = generate();
  let inputField2 = generate();

  result1EL.textContent = inputField1;
  result2EL.textContent = inputField2;
}

function setPasswordLength() {
  let value = document.querySelector("#password-length-input").value;

  passwordLength = value;
}

function copy(el) {
  let element = document.getElementById(el);
  let elementText = document.getElementById(el).textContent;

  navigator.clipboard.writeText(element.textContent).then(
    function () {
      element.textContent = "Copied!";
      setTimeout(() => {
        element.textContent = elementText;
      }, 3000);
    },
    function () {
      element.textContent = "Failed to copy!";
      setTimeout(() => {
        element.textContent = elementText;
      }, 3000);
    }
  );
}

function toggle() {
  if (isToggled === false) {
    toggleEl.style.background = "#273549";
    toggleEl.style.color = "#55F991";
    isToggled = true;
  } else {
    toggleEl.style.background = "#10B981";
    toggleEl.style.color = "#FFFFFF";
    isToggled = false;
  }
}
