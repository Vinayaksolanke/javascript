
if(true){
    let a= 200
    const b = 300
    var c = 40
}
// console.log(a)
console.log(c)     //hence we dont use var veriable bcoz they print out of the scope code

// +++++++++function within the function ++++++++++

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    //  two()

}

// one()



// +++++++++++++++++++++++++++++++

 
if(true){
   const Name = "vinayak"
   if(Name==="vinayak"){
    const LastName= "  solanke"
    console.log( Name+ LastName)
   }
//    console.log(LastName) Not print bcoz scopeof last name is ended
}
// console.log(Name)



Addone(5)

function Addone(num){
    console.log(num+1)
}




const Addtwo =  function (num){
    console.log(num+2)
}
Addtwo(5)// this function is print only in the below the function because it store in the veriable