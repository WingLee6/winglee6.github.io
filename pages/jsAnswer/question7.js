function Solution(arr) {
  if (arr.length === 0) {
    return undefined
  }

  var nMin = arr[0]

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < nMin) {
      nMin = arr[i];  // 更新最小值
    }
  }

  return nMin
}
  