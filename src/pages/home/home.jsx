import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
        <h1>Home Page</h1>
        <Link to="/login">Ir para Login</Link>
        </div>
    );
}

export default Home;