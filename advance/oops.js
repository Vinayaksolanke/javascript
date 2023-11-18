const user  = {
    Uname: 'vinayak',
    IsLoggedIn: true,
    UserDetails: function(){
        console.log(`User Is ${this.IsLoggedIn} log in`);//THIS KEYWORD IS SHOWS CURRENT CONTEXT
    }
}
console.log(user.Uname)
console.log(user.UserDetails());
console.log(this);//this keyword is use to shows information about current context.
 


// USING new(constructor function)
function users(username,LogIn,NoOfTime){
    this.username = username
    this.LogIn = LogIn
    this.NoOfTime = NoOfTime
}
const userOne = new users('vinayak',true,10)//using NEW keyword users can be defined
const userTWO = new users('BUNTY',false,15)

console.log(userOne);
console.log(userTWO);