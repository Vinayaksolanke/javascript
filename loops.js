 let Myarray = [12,23,34,56]
for (let index = 0; index < Myarray.length; index++) {
    const element = Myarray[index];
    // console.log(element);
}

for (let i = 1;i <=10;i++) {
    // console.log("outer i =",i)
    for (let J = 1; J <=10; J++) {
        
        // console.log(`Inner j = ${J} and iner i =  ${i}`)
        // console.log(i + "*" + J  + "=" + i*J)
    }
}


///break and continue

for(let i=1; i<=20;i++){
    if(i==5){
        // console.log("5 is detected")
        break
    }
    // console.log(i)
}

for(let i=1; i<=20;i++){
    if(i==5){
        // console.log("5 is detected")
      continue
    }
    // console.log(i)
}



///WHILE LOOP

let num = 1
while(num<=10){
// console.log(`the value od num is ${num}`)
num = num +2
}

let myarray = ["java", "c#", "pyhton","javascipt"]
let arr = 0
while(arr < myarray.length){
//  console.log(`the language is ${myarray[arr]}`)
 arr = arr+1

}

//DO WHILE

let score = 0
do {
    // console.log(`score is ${score}`);
     score++
}
while(score<10)

for(i=1;i<=5;i++){
    console.log("*")
    for(j=1;j<=5;j++){
        console.log("@")
    }
}


