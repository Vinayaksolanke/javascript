

function MyName(){
    console.log("v")
    console.log("i")
    console.log("n")
    console.log("a")
    console.log("y")
    console.log("a")
    console.log("k")

}
// MyName()



function Addcart(...num){//...is a spread or rest oprator witch return the numers in the arrys form
    return num
}
console.log(Addcart(200,300,400))


//Handling Object In The function
 const Intro= {
    name: "vinayak",
    Id: "@232"
}
function handleObject(anyibject){
   console.log( `Hello my name is ${anyibject.name} and my id is ${anyibject.Id}`)
}
handleObject(Intro)


// Create a function to accesing second  in the array

const Myarray = [100,200,300,400]

function accesing(anyindex){
  console.log(anyindex[1])
}
accesing(Myarray)
accesing([200,300,400,500,600])

