import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addItem(inputText) {
    setNotes((prevNotes) => {
      return [...prevNotes, inputText];
    });
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addClick={addItem} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delClick={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
