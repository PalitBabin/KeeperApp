import { useState } from "react";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [showInputBox, setShowInputBox] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    setShowInputBox(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {showInputBox && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={showInputBox ? 3 : 1}
        />
        {showInputBox && (
          <Zoom in={showInputBox}>
            <Fab onClick={submitNote} size="medium" aria-label="add">
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}



CreateArea.propTypes={
    onAdd:PropTypes.func.isRequired
}
export default CreateArea;
