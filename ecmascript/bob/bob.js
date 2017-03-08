//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
  let result = "";
      if(message === message.toUpperCase()) {
      	result = 'Whoa, chill out!';	
      } else if(message[message.length -1] === "?"){
        result = "Sure.";
      } else if(message[message.length -1] === ""){
        result = "Fine. Be that way!";  
      /*} else if (this.hasNumbers(message)){
        result = 'Whatever.' */
      } else if (/^[0-9,.]*$/.test(message)){
        result = 'Whatever.'; 
      } else if (/\d/.test(message)){
        result = "Sure."; 
      } else {
        result = 'Whatever.';
      }
      return result;
  }
 /* hasNumbers(message){
    return /\d/.test(message)
  }*/
  
};
export default Bob;

