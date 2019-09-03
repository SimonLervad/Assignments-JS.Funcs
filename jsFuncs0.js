// Regner den danske moms ud fra et given beløb
'strict'
var b = 1.25;
function addVat(a, b) {
	return a * b;
}
let a = Number(prompt('indtast beløb'))
console.log(addVat(a, b))

// Trækker momsen fra et given beløb
'strict'
var b = 0.80;
function subVat(a, b) {
	return a * b;
}
let a = Number(prompt('indtast beløb'))
console.log(subVat(a, b))

// regner ud hvor meget hvor meget momsen er, baseret på et given beløb
'strict'
function calcVat(a) {
	return a / 100 * 20;
}
let a = Number(prompt('indtast beløb'))
console.log(calcVat(a))