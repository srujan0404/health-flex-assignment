import React, { useState } from "react";
import ReplyForm from "../Forms/ReplyForm";
import Reply from "./Reply";
import formatDate from "../utils/dateUtil";

const Comment = ({ comment, replies, onReply, onEdit, onDelete }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleEdit = () => {
    if (editText.trim() !== comment.text) {
      onEdit(comment.id, editText);
    }
    setIsEditing(false);
  };

  const handleReply = (reply) => {
    onReply(comment.id, reply);
    setIsReplying(false);
  };

  const renderEditForm = () => (
    <div>
      <textarea
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
      <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-200">Cancel</button>
    </div>
  );

  const renderCommentContent = () => (
    <>
      <p>{comment.text}</p>
      <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
      <button onClick={() => setIsReplying(true)} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Reply</button>
      <button onClick={() => onDelete(comment.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-200">Delete</button>
    </>
  );

  const renderReplies = () => (
    <>
      {isReplying && (
        <ReplyForm
          onSubmit={handleReply}
          onCancel={() => setIsReplying(false)}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        />
      )}
      {replies.map((reply) => (
        <Reply
          key={reply.id}
          reply={reply}
          onEdit={onEdit}
          onDelete={onDelete}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        />
      ))}
    </>
  );

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-bold">{comment.name}</h4>
      <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
      {isEditing ? renderEditForm() : renderCommentContent()}
      {renderReplies()}
    </div>
  );
};

export default Comment;