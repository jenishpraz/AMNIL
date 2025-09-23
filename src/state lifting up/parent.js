// App.js
import { useState } from "react";
import Child from "./child";

function App() {
  const [data, setData] = useState("");

  return (
    <div>
      <Child onSend={setData} />
      <p>Data from child: {data}</p>
    </div>
  );
}

export default App;
