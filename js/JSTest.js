//make an array of questions
var question=["What index is gg in? var arr = [1, 2, r, H, P, gg];", //5
              "How would you remove the last itme from this array? var arr = [1, 2, r, H, P, gg];", //arr.pop();
              "How would you print out this array with spaces inbetween each element? var arr = [1, 2, r, H, P, gg];",//arr.join(" ");
              "How would you delete the first element and have it console log undefined? var arr = [1, 2, r, H, P, gg];", //delete arr[0];
            ]

//each question gets 3 choices so 0-2 are the choices for question 1, 3-5, 6-8, 9-11 indicies below will corrispond to questions 0,1,2,3
//THE LAST ONE IS ALWAYS the ANSWER 2 is the answer for question 1 ,5,8,11!
var choices=["0","3","5", 
             "delete", "push", "pop",
             "toString", "print", "join",
             "print", "pop", "delete"]            

function StartTest() {
  //alert(question[1]);
  //start the count down 45 sec each question
  //wrong answers delete 10 seconds
  var counter = 120;
  var testTimer = setInterval(function(){
    console.log(counter);
    counter--
    if (counter === 0) {
      console.log("Testing is done");
      clearInterval(testTimer);
    }
  }, 1000);

  var x = document.createElement("input");
  var txt = choices[2];
  x.setAttribute("type", "button");
  x.setAttribute("value", txt);
  x.setAttribute("name", "choice1");
  
  var sec = document.getElementById("divEl");

  sec.appendChild(x); 
  
}

// var counter = 120;
// var testTimer = setInterval(function(){
//   console.log(counter);
//   counter--
//   if (counter === 0) {
//     console.log("Testing is done");
//     clearInterval(testTimer);
//   }
// }, 1000);

let currentWordIndex = 0;
function speedRead() {
  // Start the interval and store the "handle" in a constant
  const intervalHandle = setInterval(function() {
    // append new word so whole string builds across the page (note: increments AFTER evaluating)
    mainEl.textContent += " " + words[currentWordIndex++];
    // When the index we're tracking is the length of the array of words we need to stop the interval
    if (currentWordIndex === words.length) {
      // note: clearInterval and clearTimeout will NOT cause an error if the value passed in isn't a valid handle (safe to call with impunity)
      clearInterval(intervalHandle);
      mainEl.innerHTML += "<hr />Done!";
    }
  }, millisecondsPerWord);

//var createLabel = document.createElement("label");
//createLabel.setAttribute("id", "createLabel");
//createLabel.textContent = "Enter your initials: ";




}