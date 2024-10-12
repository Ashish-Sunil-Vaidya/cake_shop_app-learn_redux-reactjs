import { useSelector,useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const noOfCakes = useSelector((state) => state.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No. of Cakes: {noOfCakes}</h1>
      <button onClick={()=> dispatch(buyCake())}>Buy Cakes</button>
    </div> 
  );
}

export default HooksCakeContainer;
