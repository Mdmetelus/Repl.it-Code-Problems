function digital_root(n) {
  let digit = Number(String(n).slice(0,1));
  n = Number(String(n).slice(1));
  
    if (! n) {
      return digit;
    }  else {
        if (n >= 10) {
          return digit + Number(digital_root(n));
        }
    }
}