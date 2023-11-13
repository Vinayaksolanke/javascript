const balance = 1000
if (balance <  250) {
console.log("balance is greater than 999")    
}

else if(balance < 500){

        console.log("balance is less than 500")

    }
    else if(balance <1001){
        console.log("balance is less than 1001")
    }
    else {
        console.log("condition is noot match")
    }
    // ****************littel buisness logic************************

    const UserName = true
    const IsLoggedIn=true
    if(UserName || IsLoggedIn){
        console.log("You are able to shopping")
    }
else{
    console.log("plese enter username or passward");
}
// ***********************SWITCH STATEMENT******************

// let month =  "march"
month = "jully"
switch (month) {
    case "januvari":
        console.log("you are in the januvari month")
        break;
     case "feb":
        console.log("you are in the feb month")
        break;

        case "march":
        console.log("you are in the march month")
        // break;   means of break statement is after the case is executrd all the cases below the cases are axecuted

        case "april":
          console.log("you are in the april month")
          break;
    default:
        console.log("the case is not match")
        break;
}