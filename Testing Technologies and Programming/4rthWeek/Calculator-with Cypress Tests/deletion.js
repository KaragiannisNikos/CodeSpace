function deletion_operator() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}
