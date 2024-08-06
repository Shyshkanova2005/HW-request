import React, { useState } from 'react';


function PostForm({ onSubmit }) {
    const [id, setID] = useState(''); 
    const [title, setTitle] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id, title });
    setID('');
    setTitle('');
    
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="id">ID</label>
        <textarea 
          type="number"
          id="id"
          value={id} 
          onChange={(e) => setID(e.target.value)} 
        />
        
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
     
      <button type="submit">Create album</button>
    </form>
  );
}

export default PostForm;
