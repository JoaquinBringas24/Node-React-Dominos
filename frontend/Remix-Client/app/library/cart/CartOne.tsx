import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { cartActions } from "~/store/store";

export default function CartOne({ state, fun }: { state: any; fun: Function }) {
  const items = useSelector((state: any) => state.items);

  const dispatch = useDispatch();

  return (
    <div
      className={`${!state && "hidden"} absolute z-50 self-center mt-96 mx-32`}
    >
      <div className="bg-slate-500 opacity-80 p-64 text-white">
        {items.length > 0 ? (
          items.map((item: any) => {
            return (
              <div className="flex flex-row">
                {item}
                <button
                  onClick={() => {
                    dispatch(cartActions.decrease(1));
                  }}
                >
                  REMOVE ITEM
                </button>
              </div>
            );
          })
        ) : (
          <span className="font-bold">No items in cart</span>
        )}
        <br></br>
        <button
          className="text-white self-center p-2 border-2 rounded-xl border-white hover:bg-white hover:text-black"
          onClick={() => fun(!state)}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
