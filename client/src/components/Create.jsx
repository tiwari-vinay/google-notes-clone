import React, { useState } from 'react';
import Notes from './Notes';
import '../styles/create.css'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notes, setNotes] = useState([]);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleBody(e) {
    setBody(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newNote = { title, body };
    setNotes([...notes, newNote]);
    setTitle('');
    setBody('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='input'>
        <label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
            placeholder='Title'
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={handleBody}
            placeholder='body'
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {notes.map((note, index) => (
        <Notes key={index} title={note.title} body={note.body} />
      ))}
    </div>
  );
};

export default Create;
