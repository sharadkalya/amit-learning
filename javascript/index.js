console.log('Hello World'); // THIS IS SINGLE LINE COMMENT

/*
THIS IS MULTILINE COMMENT
I CAN ADD ANOTHER LINE
AND MANY MORE LINES
*/
console.log("Hello World AGAIN");




// Program to add two numbers
/**
 * Types of variables
 * Number   // any number
 * String   // "I" "I am a string" "Any random alphabets"
 * Boolean  // true(1)/false(0)
 * Array
 */



function sum(number1, number2) {
  var result = Number(number1) + Number(number2); // parse Number to string

  return result;
}

function mySubmit() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;

  var returnVal = sum(num1, num2);

  document.getElementById('result').innerHTML = returnVal;
}


// print values from 1 to 100 using for loop
for (var i = 0; i <= 100; i++) {
  console.log(i); // 0 - 100 
}

// print values from 1 to 100 using while loop
var j = 1;
while (j <= 100) {
  console.log(j);
  j++;
}


// semi-colons in javascript are recommended but not compulsory

var fruitNames = [] // This will store all the fruits

function addFruit() {
  // get the value of fruit input by user
  var newFruit = document.getElementById('fruitInput').value;

  // push this new fruit into the array of fruits
  fruitNames.push(newFruit);

  console.log('updated fruit list', fruitNames);

  // reset the fruit input to blank string
  document.getElementById('fruitInput').value = '';

  var myFruitsHtml = '';

  // loop through all the fruits and prepare html to be inserted into the <ul> element
  for (var i = 0; i < fruitNames.length; i++) {
    /**
     * fruitsName = ['apple', 'banana', 'mango']
     * 1st iteration; i = 0
     * fruitsName[i] // fruitsName[0] // apple
     * 
     * 2nd iteration; i = 1
     * fruitsName[i] // fruitsName[1] // banana
     */

    var item = fruitNames[i];
    myFruitsHtml = myFruitsHtml + '<li>' + item + '</li>';
  }
  console.log(myFruitsHtml);
  /**
   * <li>apple</li>
   */
  /**
   * <li>apple</li><li>banana</li>
   */
  /**
   * <li>apple</li><li>banana</li><li>mango</li>
   */

  // get the <ul> element
  var list = document.getElementById('fruitNames');
  list.innerHTML = myFruitsHtml;
}
