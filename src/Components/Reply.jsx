import React, { useState } from "react";
import formatDate from "../utils/dateUtil";

const Reply = ({ reply, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(reply.text);

  const handleEdit = () => {
    if (editText.trim() !== reply.text) {
      onEdit(reply.id, editText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(reply.text);
    setIsEditing(false);
  };

  return (
    <div className="reply">
      <span className="reply-date">{formatDate(reply.date)}</span>
      {isEditing ? (
        <EditForm
          editText={editText}
          setEditText={setEditText}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
        />
      ) : (
        <ReplyContent text={reply.text} />
      )}
      <ReplyActions
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onDelete={() => onDelete(reply.id)}
      />
    </div>
  );
};

const EditForm = ({ editText, setEditText, handleEdit, handleCancel }) => (
  <div className="edit-form">
    <textarea
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
    />
    <button onClick={handleEdit}>Save</button>
    <button onClick={handleCancel}>Cancel</button>
  </div>
);

const ReplyContent = ({ text }) => <p className="reply-text">{text}</p>;

const ReplyActions = ({ isEditing, setIsEditing, onDelete }) => (
  <div className="reply-actions">
    <button onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? "Cancel" : "Edit"}
    </button>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default Reply;