// complete the given function

function palindrome(str){
	  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  

	let reversed = str.split('').reverse().join('');
	return str === reversed;

}
module.exports = palindrome
