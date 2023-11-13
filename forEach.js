//this Loop is used to accesing value within the arrys also ["","",""] and[{},{},{}]
//coomenlyit takes one callback function to returnig the value

const lang =["java","Ruby","python","javascipt","CPP"]
lang.forEach((val)=>{
    // console.log(val)//using arrow function

})

lang.forEach(function(val){// using simple function
    // console.log(val);
})

const myarray=[
    {
        name: "vianayk",
        sirname:'solanke'
    },
    {
        name:"xyz",
        sirname:"@@@"
    },
    {
        name:"abc",
        sirname:"###"
    }
]
myarray.forEach((item)=>{
    console.log(item.name);
})