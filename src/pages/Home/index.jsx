import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Linh's Universe</h1>
            <p>Select a section to explore</p>
            <Link to="/about">About Me</Link>
            <Link to="/hobbies">Hobbies</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
    );
}

export default Home;