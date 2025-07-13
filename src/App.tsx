import { Button } from "antd";
import "./styles/global.css";
import UiProvider from "./services/context/UiProvider";

function App() {
  return (
    <UiProvider>
      <div className="bg-primary m-5 text-red-950">APP</div>
      <Button className="m-11" type="primary">
        Click
      </Button>
    </UiProvider>
  );
}

export default App;
