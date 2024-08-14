import React, { useState } from "react";

const ReplyForm = ({ onSubmit, onCancel }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit({ text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <textarea
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Reply"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">POST</button>
      <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">CANCEL</button>
    </form>
  );
};

export default ReplyForm;
