function calcInput(value) {
  document.getElementById("calc-display").value += value;
}
function calculate() {
  try {
    let result = eval(document.getElementById("calc-display").value);
    document.getElementById("calc-display").value = result;
  } catch {
    document.getElementById("calc-display").value = "Error";
  }
}
function clearCalc() {
  document.getElementById("calc-display").value = "";
}

