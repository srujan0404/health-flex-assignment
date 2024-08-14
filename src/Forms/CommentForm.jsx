import React, { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      onSubmit({ name, text });
      setName("");
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <input
        className="border border-gray-300 rounded-md p-2 w-full"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">POST</button>
    </form>
  );
};

export default CommentForm;
