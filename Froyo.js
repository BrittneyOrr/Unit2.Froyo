// Create a prompt for the user to input froyo flavors upone entering the website
const userFlavors = {};
const userInput = prompt(
    "Please enter some flavors separated by commas.",
    " vanilla, vanilla, vanilla, strawberry, coffee, coffee"
  );
userFlavors.data = userInput;
console.log("You entered:", userInput);

//   split user's input into an array of strings
const stringFlavors = userInput.split(",");

// convert it into JSON 
const str1 = JSON.stringify(userInput);

// parse JSON into objects
const obj = JSON.parse(str1);


// loop to iterate (perform repeatedly) through the array of flavors - to do what? - find a match and give it a value
// Create an object to use to keep count of how many orders there are of each flavor - empty array?

// define function
function countWordOccurrences(input) {
    // initalize the result object
    const result = {};
     
    //   split user's input into an array of strings - needed to have this info again within the function to be used
const stringFlavors = userInput.split(",");

    // loop through array - made on line 11-12
    for (let word of stringFlavors) {
        // if word(flavor) is already in the result object, increment the count
        if(result[word]) {
            result[word]++;
        } else 
        // add the word(flavor) to the result object with a count of 1
        result[word] = 1; 
    }
    return result;
}

console.log(`You have ordered: ${stringFlavors.length} froyo. A table of your flavors are below:`);
console.table(countWordOccurrences(stringFlavors));


/* Checklist- doublecheck before submitting ^_^
done---names are consistent
done!!! So happy!---console output changes depending on the user's input***
---latest changes pushed to the submitted Github repo
done---repot contains HTML and a connected JS file
done? I think ---logic for counting the frequencies of elements in an array is organized into a function that returns an object
Yes!---program correctly counts the number of each flavor in the user's input
 */