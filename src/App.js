import { Routes,Route } from "react-router-dom";

import Home from "./views/home/Home";
import PageNotFound from "./views/PageNotFound";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='page404' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
