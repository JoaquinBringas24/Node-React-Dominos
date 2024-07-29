import { useDispatch } from "react-redux";
import store, { cartActions } from "~/store/store";

export default function ItemOne({
  name,
  price,
  pic,
  id,
}: {
  name: string;
  price: number;
  pic: string;
  id: number;
}) {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.increment(id));
  };
  return (
    <div className="flex flex-col rounded-2xl bg-slate-100 items-center p-2 m-4 shadow-md">
      <img className="p-10 pb-2 max-h-80" src={`${pic}`} alt={`${name}`} />
      <span className="text-xl font-semibold py-2">{name}</span>
      <span className="text-lg font-semibold py-2">${price}</span>
      <button
        onClick={addItem}
        className="border-2 p-2 rounded-2xl bg-blue-400 text-white border-white shadow-xl hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
