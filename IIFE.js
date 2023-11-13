// use to avoid  globle scopes polution
function Database(){
    console.log(`Db connected`)
}
// Database()
// +++++++++IIFE

(function Database1(){
    console.log(`Db connected`)
})();
//to writw two IIFe function Use Simicolon; 

(function Database2(){
    console.log(`Db connected two`)
})();
//ARROW IIFE FUNCTION

(() => {
    console.log(`DB connected In arrow`)
})()
;

((name) => {
    console.log(`DB connected In arrow ${name} using parameter`)
})("vinayak")
