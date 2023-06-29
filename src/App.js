import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    const endpointURL = `https://pixabay.com/api/?key=37275148-8ac0fcfa39bb959c8e7e351ed&q=${ref.current.value}&image_type=photo`;
    fetch(endpointURL)
      .then((res) => {
        console.log('then1');
        return res.json();
      })
      .then((data) => {
        console.log('then2');
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
