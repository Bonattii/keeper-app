import './App.css';
import notes from './notes';

import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />

      {notes.map(note => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}

      <Footer />
    </div>
  );
}
