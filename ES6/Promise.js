const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer=false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received"); //The promise rejected with the reason "Data not received".
    }
  });

  console.log(makeServerRequest);