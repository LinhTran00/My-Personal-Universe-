import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Linh's Universe</h1>
            <p>Select a section to explore</p>
            <ul>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
        </div>

    );
}

export default Home;