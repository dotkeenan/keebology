import PriceFormatter from './price-formatter';

function CalculateTotal(cartArray) {
  let total = null;
  cartArray.forEach(cartItem => { total += cartItem.price; });
  return !cartArray.length ? `$${0}` : PriceFormatter(total);
}

export default CalculateTotal;
