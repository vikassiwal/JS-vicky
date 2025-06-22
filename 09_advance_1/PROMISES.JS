// promises

const promiseOne = new Promise(function(resolve, reject){
    //Do and  async task
    // DB calls , cryptography, networks calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() 
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");   
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"Chai", email:"chai@example.com"})
    }, 1000);
})
promiseThree.then((user)=>{
    console.log(user);
    
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error =true;
        if(!error){
            resolve({username:"vicky",password:"123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000);
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((myusername)=>{
    console.log(myusername);
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})

const promisefive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error =true;
        if(!error){
            resolve({username:"JAVASCRIPT",password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumepromiseFive(){
   try{
    const response =  await promisefive
   console.log(response);
   }catch(error){
    console.log(error);
    
   }
   
}
consumepromiseFive()

// async function getallUsers(){
//     try {
//         const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data =await response1.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:" ,error);
        
//     }
    
// }
// getallUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
})