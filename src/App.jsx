import React, {useEffect, useState} from 'react'
import Card from './components/Card'

function App() {
  const [images, setImages] = useState([]);
  const [term, useTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => { 
        setImages(data.hits) 
      })
      .catch(err => console.log(err));
  }, []);

  // console.log(images);

  return (
    <>
      
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {images.map((img, index) => 
            <Card key={index} image={img}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
