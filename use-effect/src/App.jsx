import { useState } from "react";
import Child from "./components/Child";

function App() {
  const [showChild, setShowChild] = useState(true);

  return (
    <main>
      <div>
        {/* useEffect | ciclo de vida de los componentes */}
      </div>

      <button onClick={() => setShowChild(!showChild)}>
        Toggle Child
      </button>

      {showChild && <Child />}
    </main>
  );
}

export default App;