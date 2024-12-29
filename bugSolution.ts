function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): number { //Corrected return type
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return n; //Now it's correct
}

printNumbers2(5); 