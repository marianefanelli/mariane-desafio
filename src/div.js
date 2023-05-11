function div(a, b) {

  if (b === 0) {
    throw new Error('Invalid argument');
  }
  
  return a / b;
}

module.exports = div;