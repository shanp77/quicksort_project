function quickSort(array) {
  
  if (array.length <= 1) {
    return array;
}

  let pivot = array.shift();

  let left = array.filter((num) => {
    if ( num < pivot ) {
      return num;
    }  
  });

  let right = array.filter((num) => {
    if ( num >= pivot ) {
      return num;
    }
  });
  
  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return leftSorted.concat([pivot]).concat(rightSorted);
}


module.exports = {
    quickSort
};