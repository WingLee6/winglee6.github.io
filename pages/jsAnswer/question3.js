function Solution(arr) {
  if (arr.length === 0) {
    console.error('数组为空');
    return undefined;
  }

  return Math.max(...arr);
}
  

// let arr = [1, 2, 3, 4, 5];  
// console.log(Solution(arr));  // 输出：5
