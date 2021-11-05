import names from "./names.json";
import { BabyNames } from "./component/BabyNames";
import { Header } from "./component/Header";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <Header />
      {BabyNames(names)}
    </>
  );
}

export default App;
