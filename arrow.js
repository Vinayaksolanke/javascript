const Welcome = {
    UserName:"vinayak",
    password:"1234565",
    sayhello: function(){
        console.log(`Welcome ${this.UserName}`)
        // console.log(this)

    }
}
Welcome.sayhello()

Welcome.UserName= "om"
Welcome.sayhello()

const hello= function(){
    User='vinayak'
    console.log(this.User);
}
hello()

const hello1= (num)=>num+1
console.log(hello1(5))

const hello2= (num)=>{return num+1}
console.log(hello1(5))