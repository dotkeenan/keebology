function PriceFormatter(price) {
  let resultPrice = price + '';
  resultPrice = resultPrice.split('');
  resultPrice.splice(resultPrice.length - 2, 0, '.');
  return `$${resultPrice.join('')}`;
}

export default PriceFormatter;
