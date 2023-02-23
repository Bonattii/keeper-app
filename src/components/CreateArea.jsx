import { useState } from 'react';

import './CreateArea.css';

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    props.onAdd(note);
    setNote({ title: '', content: '' });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
