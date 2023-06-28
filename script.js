var phoneResult;

function validate(){

    let phoneNumber = document.getElementById('phone-number').value;
    let postalCode = document.getElementById('postal-code').value;

    // console.log(phoneNumber); ----nu va aparea in consola deoarece este prin in form.
    

    let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    let postalRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    phoneResult = phoneRGEX.test(phoneNumber);
    postalResult = postalRGEX.test(postalCode);
    

    alert("phone:"+phoneResult + ", postal code: "+postalResult);

   


     // Case 1: two empty inputs; 
    if (!phoneNumber && !postalCode) {
      alert("Err: Please introduce a phone number and postal code")
    }

// Case 2: first empty, second with data; 
if (!phoneNumber && postalCode) {
  alert ("Err: Please introduce phone number")
}

 // Case 3: first with data, second empty;
 if (phoneNumber && !postalCode) {
  alert ("Err: Please introduce postal code")
}

 // Case 5: first wrong data, second right data;
 if (!phoneResult && postalResult) {
  alert("Err: Introduce a valid phone no.")
 }

   // Case 6: first right data, second wrong data;
   if (phoneResult && !postalResult) {
    alert("Err: Introduce a valid postal code")
   }

   // Case 7: both wrong data;
   if (!phoneResult && !postalResult) {
    alert("Err: Introduce a valid phone no and postal code")
   }

   // Case 9: first empty, second wrong data;
   if (!phoneNumber && !postalResult) {
    alert("Err: Introduce a phone no and valid postal code")
   }

    // Case 10: first empty, second right data;
    if (!phoneNumber && postalResult) {
      alert("Err: Phone field empty. Please introduce a phone no.")
     }


      // Case 11: first wrong data, second empty;
      if (!phoneResult && !postalCode) {
        alert("Err: Please introduce a valid phone. Postal code field empty. Please introduce postal code.")
       }

       // Case 12: first right data, second empty; 
   if (phoneResult && !postalCode) {
    alert("Err: Postal code field empty. Please introduce postal code.")
   }






  



// INPUT
    // Case 1: two empty inputs; 
    // Case 2: first empty, second with data; 
    // Case 3: first with data, second empty;
    // Case 4: both with data; - WE DON'T NEED IT

// REGEX
    // Case 5: first wrong data, second right data;
    // Case 6: first right data, second wrong data;
    // Case 7: both wrong data;
    // Case 8: both correct data; - WE DON'T NEED IT

// INPUT + REGEX
    // Case 9: first empty, second wrong data;
    // Case 10: first empty, second right data;
    // Case 11: first wrong data, second empty;
    // Case 12: first right data, second empty; 


    

}

