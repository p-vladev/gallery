import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

function CardView(){
    const location = useLocation();
    const {image} = location.state;
    const tags = image.tags.split(", ");

    return(
        <>
            <BackButton />
            <div className="flex flex-col items-center">
                <div className="max-w-3xl overflow-hidden shadow-lg mb-4 mt-5">
                    <img src={image.largeImageURL} 
                        alt="" 
                        className="w-full" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-gray-700 text-xl mb-2">
                            Photo by {image.user}
                        </div>
                        <ul>
                            <li>
                                <strong>Views: </strong>
                                {image.views}
                            </li>
                            <li>
                                <strong>Likes: </strong>
                                {image.likes}
                            </li>
                            <li>
                                <strong>Downloads: </strong>
                                {image.downloads}
                            </li>
                        </ul>
                    </div>
                    <div className="px-6 py-4">

                        {tags.map((viewTag, index) => 
                            <Link key={index}  to="/" state={{viewTag}}
                                className="cursor-pointer inline-block bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mt-2">
                                    {viewTag}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default CardView