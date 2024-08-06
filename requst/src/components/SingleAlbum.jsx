import React, { useState } from 'react';
import axios from 'axios';

function SingleAlbum() {
  const [albumId, setAlbumId] = useState('');
  const [album, setAlbum] = useState(null);

  const fetchAlbum = () => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then(response => {
        setAlbum(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the album!', error);
      });
  };

  return (
    <div>
      <div>
        <label htmlFor="albumId">Album ID:</label>
        <input 
          type="number" 
          id="albumId"
          value={albumId}
          onChange={(e) => setAlbumId(e.target.value)}
        />
          <button onClick={fetchAlbum}>Fetch Album</button>
      </div>
      {album && (
        <div>
          <h2>{album.title}</h2>
          <p>User ID: {album.userId}</p>
        </div>
      )}
     
    </div>
  );
}

export default SingleAlbum;
