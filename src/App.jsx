import "./App.css";
import CakeShopContainer from "./components/CakeShopContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeShopContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
