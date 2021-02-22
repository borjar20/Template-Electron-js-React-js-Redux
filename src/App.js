import "./normalize.css";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hi world</h1>
      </div>
    </Provider>
  );
}

export default App;
