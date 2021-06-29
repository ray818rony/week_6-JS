
/*Write a function that takes in the string and the list of dog names, loops through
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]



function findWords(){
    for(let i = ""; i< dog_names.length; i++)
       for(let j = ""; j < dog_string.length; j++)
            if (i === j){
                console.log("Matched dog_name")
/*just to check*/console.log(i,j)
            }
            else{
                console.log("No Matches")
            }
}

findWords()


// Big O factor is High since it is a double For loops
// O(n^2)


/*answer that has been logged*/
// Matched dog_name
// app.js:16
// 50app.js:19 No Matches
// app.js:15 Matched dog_name
// app.js:16 1 1
// 50app.js:19 No Matches
// app.js:15 Matched dog_name
// app.js:16 2 2
// 50app.js:19 No Matches
// app.js:15 Matched dog_name
// app.js:16 3 3
// 46app.js:19 No Matches
// app.js:54

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                arr.splice(i, 1, 'even index')
            }
        }
        return arr
    }

console.log(replaceEvens(arr))


//Big O factor is small since it is a single for loop


/*answer that has been logged*/
// (6) ["even index", "Baseball", "even index", "Goku", "even index", "Rodger"]
// 0: "even index"
// 1: "Baseball"
// 2: "even index"
// 3: "Goku"
// 4: "even index"
// 5: "Rodger"
// length: 6
// __proto__: Array(0)


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
// let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


