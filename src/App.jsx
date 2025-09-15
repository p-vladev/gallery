import React, {useEffect, useState} from 'react'
import Card from './components/Card'
import Search from './components/Search';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => { 
        setImages(data.hits) 
        setIsLoading(false)
      })
      .catch(err => console.log(err));
  }, [term]);

  console.log(images);

  return (
    <>
      
      <div className="container mx-auto">
        <Search search={(text) => setTerm(text)}/>

        {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}

        {/* {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">LOADING...</h1> : } */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 p-4">
            {images.map((img, index) => 
              <Card key={index} image={img} searchByTag={(text => setTerm(text))}/>
            )}
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
