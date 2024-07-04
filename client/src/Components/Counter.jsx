import { useDispatch, useSelector } from "react-redux";
import { increment } from "../app/features/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.counterR?.count);
  console.log(count);

  const handelCount = () => {
    console.log("1")
    dispatch(increment(1));
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handelCount}
      >
        Increment
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(increment(-1))}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
