function calculateHypotenuse() {
  let a = document.getElementById("sideA").value;
  let b = document.getElementById("sideB").value;

  a = Number(a);
  b = Number(b);

  if (a <= 0 || b <= 0) {
    document.getElementById("result").return;
  }

  let c = Math.sqrt(a * a + b * b);
}