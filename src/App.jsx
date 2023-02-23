import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prev => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <CreateArea onAdd={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}
