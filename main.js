//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str_,list_){
    for (let i = 0; i < list_.length; i++){
        if (str_.indexOf(list_[i]) > 0) {
            console.log("Matched dog_name")
        break;
        }
    }
}

let returned_value1 = findWords(dog_string, dog_names)
// console.log(returned_value1)


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given ]
var arr_1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr_){
    for (let i = 0; i < arr_.length; i++){
        if (i % 2 == 0){
            arr_[i] = "even index"
        };
    }
    console.log(arr_)
}

let returned_value2 = replaceEvens(arr_1)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// #1 Create a function that takes an integer as an argument and returns "Even" 
// for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    if (number % 2 == 0){
      return ("Even");
    }
    else if (number % 1 == 0) {
      return ("Odd");
    }
  }


// #2 Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return number * -1
  }