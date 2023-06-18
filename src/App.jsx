import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./app.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
