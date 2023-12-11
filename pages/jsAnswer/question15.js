function Solution(strPhone) {
  var regex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return regex.test(strPhone);
}
  