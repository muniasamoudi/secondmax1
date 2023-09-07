const secondMax = function(array) {
    if (array.length < 2) {
      return array[0];
    }
  
    let max = array[0];
    let secondMax = array[1];
  
    if (secondMax > max) {
      let temp = max;
      max = secondMax;
      secondMax = temp;
    }
  
    for (let i = 2; i < array.length; i++) {
      if (array[i] > max) {
        secondMax = max;
        max = array[i];
      } else if (array[i] > secondMax && array[i] !== max) {
        secondMax = array[i];
      }
    }

    return secondMax;
  };
  
  console.log(secondMax([1, 5, 2])); // 2
  console.log(secondMax([-1, -5, 2])); // -1
  console.log(secondMax([-3, -2, -7])); // -3
  // O(nlogn)