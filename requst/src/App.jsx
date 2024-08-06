import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Album from './components/album'
import PostForm from './components/postAlbum';
import SingleAlbum from './components/SingleAlbum';
import PostList from './components/PostList';

function App() {
  const [albums,  setAlbum] = useState([]);


  const fetchAllAlbums = () => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the albums!', error);
      });
  };

  const addAlbum = (newAlbum) => {
    axios.post('https://jsonplaceholder.typicode.com/albums', newAlbum)
      .then(response => {
        setAlbum([response.data, ...albums]);
      })
      .catch(error => {
        console.error('There was an error creating the post!', error);
      });
  };

  return (
    <div>
       <Album />
      <PostForm onSubmit={addAlbum} />
      <SingleAlbum />
      <PostList posts={albums} />
    </div>
  );
}

export default App
