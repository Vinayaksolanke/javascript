
const Myvalue = ""  // false value
if(Myvalue){
    console.log("value is true");
}else{
    console.log("value is false");
}


const Myvalue2 = []  // True value
if(Myvalue2){
    console.log("value is true");
}else{
    console.log("value is false");
}

//false value ==> ""  Bigint 0n  false   0  -0  Null undefinded

//truthy value ==> 'false'  " "   []     {}     function Myfunction(){
                                                            //    }


//    ************* Turnery oprator *****************************                                                         
   // Terniary Operator

// condition ? true : false

  Fess = 800
   Fess <= 100 ? console.log("congrats you purchese the course") : console.log("course not to  purchese ")