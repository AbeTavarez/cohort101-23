function processData(input) {
  let result = "yes";

  for (let i = 2; i < input; i++) {
    console.log(input, i,'Prime: ',input % i === 0);
    if (input % i === 0) {
      // is not prime
      result = "no";
    }
  }
  console.log(result);
}

processData(10);
