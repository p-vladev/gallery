function Card({searchByTag, image}){
    const tags = image.tags.split(", ");

    function handleClick(tg){
        searchByTag(tg);
    }

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <img src={image.webformatURL} 
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

                {tags.map((tag, index) => 
                    <li key={index}
                        onClick={() => handleClick(tag)} 
                        className="cursor-pointer inline-block bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mt-2">
                            {tag}
                    </li>
                )}
            </div>
        </div>
    );
}

export default Card