import { Link } from "react-router-dom";
import "./style.css";

function Home() {
    return (
        <div>
            <h1>Welcome to Linh's Universe</h1>
            <p>Select a section to explore</p>
            <div className="flex-container">
                <div className="box"><Link to="/about">About Me</Link></div>
                <div className="box"><Link to="/hobbies">Hobbies</Link></div>
                <div className="box"><Link to="/favorites">Favorites</Link></div>
            </div>
            
        </div>
    );
}

export default Home;