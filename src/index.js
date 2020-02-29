exports.min = function min (array) {
  if ((!Array.isArray(array)) || (array.length == 0)) {
      return 0;
  }
  array = array.sort();
  if (array[0] < 0) {
      let min = array[0];
      array.map(el => {
          if (el >= 0) {
              return min;
          }
          if (el < min) {
              min = el;
          }
      });
      return min
  } else {
    return array[0];
  }
}

exports.max = function max (array) {
    if ((!Array.isArray(array)) || (array.length == 0)) {
        return 0;
    }
    let max = array[0];
    array.map(el => {
        if (max < el) {
            max = el;
        }
    })
    return max;
}

exports.avg = function avg (array) {
    if ((!Array.isArray(array)) || (array.length == 0)) {
        return 0;
    }
    let avg = 0;
    array.map(el => {
        avg += el;
    })
    return avg / array.length;
}
