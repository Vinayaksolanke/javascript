class school{
//here we can give properties
// name
// class
// teachers
#teacher
//USING # we can make our data member private
// here we can call custom constructor function as follows IN CF WE CAN GIVE VALUES TO PROPERTY USING "THIS" KEYWORD
constructor(n ,c, t){
    console.log("constructor function is called");
    this.name=n
    this.class=c
    this.#teacher=t
}


static hello(){// to call static function use class SATIC FUNCTION IS ATTACHED TO THE CLASSES
    console.log("hello iam static function");
}


//behaviours in form of function called member function
welcome (){
    console.log("welcome to the school");
}
}


const a  = new school("zp",10,20)//here new gives empty object and we call here constructor function => school()
console.log(a);
a.welcome()
school.hello()