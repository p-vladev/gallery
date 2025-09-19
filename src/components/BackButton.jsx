import { Link } from "react-router-dom";

function BackButton(){

    return(
        
        <Link to="/"
            className="block max-w-fit bg-gray-500 hover:bg-gray-700 rounded text-white py-2 px-4 m-3">
            ← Back to home
        </Link>

        
    );
}

export default BackButton