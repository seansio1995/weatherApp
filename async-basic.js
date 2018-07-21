console.log("Starting the app");


setTimeout(()=>{
  console.log("Inside of the callback");
},2000);

setTimeout(()=>{
  console.log("Second timeout");
},0);


console.log("Finish the app")
