



fetch("https://api.github.com/users/hiteshchoudhary")
.then((callback)=>{

return callback.json() 
})
.then((obj)=>{
    console.log(obj.followers);
})
.catch((error)=>{
    console.log(error)
})
