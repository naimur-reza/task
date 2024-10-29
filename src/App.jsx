import Magnafier from "./components/Magnafier";
import Reader from "./components/Reader";

import SuperPowers from "./components/SuperPowers";

const App = () => {
  return (
    <>
      <div className="flex items-center max-w-7xl mx-auto justify-center">
        <SuperPowers />
        <Magnafier />
      </div>
      <Reader />
    </>
  );
};

export default App;
