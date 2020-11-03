function PriceFormatter(price) {
  let resultPrice = price + '';
  resultPrice = resultPrice.split('');
  resultPrice.splice(resultPrice.length - 2, 0, '.');
  return `$${resultPrice.join('')}`;
}

export default PriceFormatter;

// function test(price) {
//   const priceString = price.toString();
//   const decimal = priceString.length - 2;
//   const splitString = priceString.split('');
//   splitString.splice(decimal, 0, '.');
//   console.log('price string', priceString);
//   console.log('decimal', decimal);
//   console.log('splitString', splitString);
//   return parseInt(splitString.join(''), 10);
// }
