function titleCase(str) {
    let words = str.split(" "); // split the string into an array of words using a space as the separator
    for (let i = 0; i < words.length; i++) { // loop through each word in the array
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase(); // capitalize the first letter and concatenate it with the rest of the word in lowercase
    }
    let result = words.join(" "); // join the array of words back into a string using a space as the separator
    return result;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));

