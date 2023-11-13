let num = [1,2,3,4,5,6]
for (const numbers of num) {
    console.log(numbers)
}

let map= new Map()
map.set("In", "india")
map.set("SA", "south afrika")
map.set("NZ", "newziand")
map.set("AUS", "australia")
console.log(map);//returns in the form of objects

for (const values of map) {
    console.log(values); //return in the form of arrays
    
}

// to destucturing of arrays

for (const [key,value] of map) {
    // console.log(key, "-" ,value);
    
}
// ************IMPORTANT***************
// for of loop does not work with objects
//so for that we use for in loop


// **********************FOR IN *********************
const language ={
    javascipt: "js",
    java: "java",
    python:"py",
    cpp:"cp"
}
for (const val in language) {
    console.log(val + " file extention of " +language[val]);
}