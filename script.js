console.log("This is working");

const noCustomerInput = setTimeout(alertCustomer, 10000);

function alertCustomer() 
  {
    document.getElementById("Alert").innerHTML = "Please input your response";
    alert("We detected that you did not input any response, please enter your response to stay logged in");
  }