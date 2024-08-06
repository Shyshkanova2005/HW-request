import { useState, useEffect } from 'react'
import axios from 'axios';



function Album() {
  const [albums, setAlbums] = useState([]);
  const [albumById, setAlbumById] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleCreateAlbum = (album) => {
    createAlbum(album)
      .then(response => {
        setAlbums([...albums, response.data]);
      })
      .catch(error => {
        console.error('There was an error creating the album!', error);
      });
  };
  return (
    <div className="App">
      <h1>Albums</h1>
      <ul>
      {albums.map(album => (
        <li key={album.id}>
        <h2>{album.title}</h2>
        <p>User ID: {album.userId}</p>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default Album