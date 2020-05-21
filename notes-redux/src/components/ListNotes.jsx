import React from "react";

const ListNotes = ({ notes, removeNote }) => (
  <ul className="list-group">
    {notes.map((item) => (
      <li key={item.id} className="list-group-item note">
        <div>
          <strong className="noteName">{item.title}</strong>
          <small>{item.date}</small>
        </div>
        <button
          onClick={removeNote.bind(null, item.id)}
          type="button"
          className="btn btn-outline-danger btn-sm"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ListNotes;
