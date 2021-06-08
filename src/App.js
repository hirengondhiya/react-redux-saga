import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ImageGrid />
      </div>
    </Provider>
  );
}

export default App;
