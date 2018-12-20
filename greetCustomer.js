var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  // your code here
  if(!customerData[firstName]){
    greeting += 'Welcome! Is this your first time?';
  }
  
  function visiting(visit){
    if(visit ===1) greeting += 'Welcome back, '+firstName+'!'+' We\'re glad you liked us the first time!';
    else greeting += 'Welcome back, '+firstName+'!'+' So glad to see you again!';
   }
  
  for(var prop in customerData){
    if(prop === firstName){
      var visit = customerData[firstName];
      visiting(visit.visits);
    }
  }
  return greeting;
}

