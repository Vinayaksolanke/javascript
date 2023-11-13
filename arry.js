const Myarry = [1,2,3,4,5,6]
const MyNarry = [12,13,14,15]
// console.log("Main arry " ,Myarry)
// console.log("Main arry " ,Myarry[2])

//Arrys Methords

 Myarry.push(8) //add elements on arry
Myarry.pop()// remove elements on arry

Myarry.unshift(0)//returns new elment at start of an arry
Myarry.shift() // remove first element of an arry
console.log(Myarry.includes(10))
console.log(Myarry.concat(MyNarry))//USe to join arry and return a new arry

//slice

 const slice = Myarry.slice(1,4)//cut the arry and give the cutted arry
console.log("slice" , slice)

Myarry.splice(1,4)//remove the index of arry ie first index to fourth index
console.log("Main arry " ,Myarry)

// isarry SOMW IMPORTANT METHORD OF AARys
// Form 
// of
let a = [1,2,3,4,5]
let b =[6,7,8]
let c = a.concat(b)
console.log(c);