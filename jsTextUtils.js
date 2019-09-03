// Returns first letter
var string = prompt('indtast navn');
function firstLetter(string) {
  return string.charAt(0)
}
firstLetter(string);

// Returns last letter
var string = prompt('indtast navn'); 
function last(string) {
	return string.charAt(string.length-1);
}
last(string);

//removes first and last letter, show every letter in between. 
var string = prompt('indtast navn'); 
function last(string) {
	return string.substring(1).slice(0,-1);
}
last(string);