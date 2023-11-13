const PromiseOne = new Promise(function(resolve , reject){
    //DB call 
    setTimeout(function(){
        console.log("Promise is completed");
        resolve()
    },1000)
    
})
PromiseOne.then(function(){
    console.log("Done");
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
        resolve({name:"vinayak",Email:"Vinayal@gmail.com",No:"12344657"})
        }else{
            console.log("ERROR: Something went Wrong");
        }
    },1000)
})
promiseTwo
.then((user)=>{
    console.log(user)
    return user.No
    
})
// .then(function(username){
    // console.log(username);
    // return user.No
// })
.then((no)=>{
    console.log(no);
})
.catch((error)=>{
    console.log(error);
})

//

let f= fetch('https://api.github.com/users/hiteshchoudhary')
f.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
