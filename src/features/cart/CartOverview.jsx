import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-6 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="text-stone-4 space-x-4 p-4 font-semibold uppercase sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
