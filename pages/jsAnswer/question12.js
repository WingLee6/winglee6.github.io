function Solution(strInput) {
  var strReversed = strInput.split('').reverse().join('');
  
  return strInput === strReversed;
}
  