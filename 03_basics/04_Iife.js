//Immediatly Invokes Function Expression

//kuch   bar globel scope ke polution ki wajah se
//problem hoti h tpo us pollution ko htane ke liye
//hm iife ka use krte h

(function chai(){
    //named iife
    console.log(`DB CONNECTED`); 
})(); //yha is code ko end krmne ke liye semi colon jruri h

(  (name)=> {
    console.log(`DB CONNECTED TWo ${name}`);
    
})("vicky")