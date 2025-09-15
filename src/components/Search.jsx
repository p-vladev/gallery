import React, {useState} from "react";

function Search({search}){
    const [searchText, setSearchText] = useState("");

    function handleText(event){
        setSearchText(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();

        search(searchText);
    }

    return(
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
                    <input onChange={(e) => handleText(e)}
                            type="text" 
                            className="appearence-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                            placeholder="Search"/>
                    <button type="submit"
                            className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Search