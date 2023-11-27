import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedPage from "./components/ProtectedPage";
import "./index.css"


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedPage>
                  {/* <Homepage /> */}
                </ProtectedPage>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
