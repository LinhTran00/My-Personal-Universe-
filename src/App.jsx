import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Hobbies from "./pages/Hobbies";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Router>
    );
}

export default App;