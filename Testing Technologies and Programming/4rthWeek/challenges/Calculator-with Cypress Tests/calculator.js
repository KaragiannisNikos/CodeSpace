function calculate_operator() {
  let solve = document.getElementById("result").value;

  try {
    // Use eval for simple calculation parsing
    let result = eval(solve);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
