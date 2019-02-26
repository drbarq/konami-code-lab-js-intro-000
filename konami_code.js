const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var log = []

// need to listen for key presses; make a function for each key?

// add event listener to table
//var el = document.getElementById("outside");
//el.addEventListener("click", *function, false);

/*
$(document).keydown(function(e) {
    console.log(e.keyCode);
});
*/


//document.quereySelctor

/*

$(document).ready(function() {
  $(document).keydown(function(event){
    log.push(event.which)
    console.log(event.which)
//    $(log).html("Key: " + event.which);
  });
});

*/
/*
function onKeyDownHandler(e) {
  const key = e.key;

  if (key === code[log]) {
    log.push(event.which);
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
*/

let textarea = document.getElementById('test-target'),
consoleLog = document.getElementById('console-log'),
btnClearConsole = document.getElementById('btn-clear-console');

function logMessage(message) {
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(message));
  consoleLog.appendChild(p);
}

document.addEventListener('keydown', (e) => {
  if (!e.repeat)
    logMessage(`first keydown event. key property value is "${e.which}"`);
  else
    logMessage(`keydown event repeats. key property value is "${e.key}"`);
});

textarea.addEventListener('beforeinput', (e) => {
  logMessage(`beforeinput event. you are about inputing "${e.data}"`);
});

textarea.addEventListener('input', (e) => {
  logMessage(`input event. you have just inputed "${e.data}"`);
});

textarea.addEventListener('keyup', (e) => {
  logMessage(`keyup event. key property value is "${e.key}"`);
});

btnClearConsole.addEventListener('click', (e) => {
  let child = consoleLog.firstChild;
  while (child) {
   consoleLog.removeChild(child);
   child = consoleLog.firstChild;
  }
});


// need to store sequence of key presses in dynamic 10 element array

// need to compare the stored sequence to the const codes array

// need to make an alert if true

// in theory couldnt that array eventually trigger randomly?

/*
function init() {
  // your code here

}
*/
