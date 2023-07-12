import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
  setNotes((prevNotes) => {
    return prevNotes.filter((item, index) => {
      return index !== id;
    });
  });
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item,index) => {
        return <Note key={index} id={index} onDelete={deleteNote} title={item.title} content={item.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
