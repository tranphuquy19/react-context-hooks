import React, {useState} from 'react';
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import Store from "./store";
import ComponentC from "./components/componentC";
import ComponentD from "./components/componentD";
import ComponentE from "./components/componentE";

function App() {
  return (
      <Store>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
          <ComponentD/>
          <ComponentE/>
      </Store>
  );
}

export default App;
