function addZero(n) {
  if (n <= 9 && n >= 0) {
    return "0" + n;
  } else if (n <= -1 && n >= -9) {
    return "-0" + Math.abs(n);
  } else {
    return n;
  }
}

export default addZero;
