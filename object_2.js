//Object is created
const NewObject = {}
// assiging value to created object

NewObject.name= "Username"
NewObject.email = "v@gmail.com"
NewObject.number = 123456

// console.log(NewObject)  

const Literals = {
    rollNo: 22,
    marks: 90,
    subjects:{
        math: 40,
        physics:60,
        chemistry:45

    }
}
// console.log(Literals)     //Printing whole object

//Way to printing objects within the objects
console.log(Literals.subjects.physics)

console.log(Literals.subjects)

const User = [
    {
        name: "vinayak",
        ID: "123#"
    },
    {
       name1: "sam",
       ID1:"134@"
    },
    {
        name2: "sam",
        ID2:"134@"
     }
]
console.log(User[0].name)
console.log(typeof(User.name))

// returnig object in the form of array

const Myobject = {
    name:"sam",
    email: "user@124"

}
console.log(Object.keys(Myobject))
