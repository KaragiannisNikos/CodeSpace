function toggleSign() {
  let currentValue = document.getElementById("result").value;
  if (currentValue) {
    document.getElementById("result").value = parseFloat(currentValue) * -1;
  }
}
