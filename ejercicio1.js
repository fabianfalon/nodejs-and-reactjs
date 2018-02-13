/* Escribe un script que a partir de un array de ints devuelva un
array de strings aplicando las siguientes reglas:
• Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
• Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
• Devuelve FizzBuzz si el número es divisible por 3 y por 5.
Puedes utilizar cualquier lenguaje que consideres apropiado. */

function generateRandomsNumbers(low, high) {
  /* funcion para generar numeros aleatorios */
  return Math.floor(Math.random() * (high - low + 1) + low);
}

function checkNumber(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz"
  } else if (number % 3 == 0 || number.toString().includes("3")) {
    return "Fizz"
  } else if (number % 5 == 0 || number.toString().includes("3")) {
    return "Buzz"
  }   
}

function main() {

  let numbers = new Array(10)
  const resultNumbers = []
  const resultString = []
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = generateRandomsNumbers(1, 10)
  }

  numbers.forEach((value, index) => {
    if (checkNumber(value)) {
      resultString.push(checkNumber(value))
      resultNumbers.push(value)
    }
  });
  console.log(`Lista original de numeros: [${numbers}]`)
  console.log('resultado')
  console.log(resultString)
  console.log('Numeros que se compararon')
  console.log(resultNumbers)
  
}

if (require.main === module) {
  main();
}