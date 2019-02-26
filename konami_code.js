/*
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
*/
/*
// version one, using .which to return the numeric value of the keys pressed.
//pushes the numbers to an array that is capped at 10 digits and clears when an incorrect key is pressed
var log = []
var codes = [38,38,40,40,37,39,37,39,66,65]


document.addEventListener('keydown', (e) => {
	if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 || e.which === 65 || e.which === 66) {
  	log.push(e.which);
//  	logMessage(log);
    if (log.length > 10) {
    log.shift();
    }
  }
 else {
 log = []
 }
});



function init() {
  if (log === codes) {
  	alert("Code Unlocked");
    console.log(log);
  }
  // your code here
}
*/


// version 2 using .key to compare the key names but should work the same
/*


var log = []

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


function init() {
  if(log === codes) {
      alert("Code Unlocked");
    }

document.addEventListener('keydown', (e) => {
	if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "a" || e.key === "b") {
  	log.push(`${e.key}`);
    if (log.length > 10) {
    log.shift();
        }
      }
    else {
      log = []
    }
});

}

*/


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

var index = 0

function init(e) {
document.addEventListener('keydown', (e) => {
  if e.key === codes[index] {
    index++;
    if index === codes.length {
      alert("Code Unlocked");
      index = 0;
    }
  }
  else {
    index = 0
    }
  }
}


/*
	if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "a" || e.key === "b") {
  	log.push(`${e.key}`);
    if (log.length > 10) {
    log.shift();
        }
      }
    else {
      log = []
    }
});



if(log === codes) {
    alert("Code Unlocked");
  }


*/











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
/*
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

*/
