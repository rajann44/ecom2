import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<div>Hello</div>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
