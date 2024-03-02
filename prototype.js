const info ={
    name: "vinayak",
    age: 23,
}

const sub ={
    math: 60,
    pysics:80
}
 
const teacher = {
    mathteacher: "Bcs",
    physicsteacher: "mca",
}
// This is prototype inheritance to give acces the property of one object to another
Object.setPrototypeOf(info , teacher)
console.log(info.mathteacher);


// to remove exatra space from string

let name = "vinayk     "
console.log(name.length)

String.prototype.truelenght = function(){
    console.log(`the real lenght of string is ${this.trim().length}`);
}
"vinayak     ".truelenght()
name.truelenght()