import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

import './CreateArea.css';

export default function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
          onChange={handleChange}
        />

        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
