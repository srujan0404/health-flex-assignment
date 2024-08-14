import React, { useState, useMemo } from "react";
import Comment from "./Comment";

const CommentList = ({ comments, replies, onReply, onEdit, onDelete }) => {
  const [sortOrder, setSortOrder] = useState("desc");

  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => {
      return sortOrder === "desc"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
  }, [comments, sortOrder]);

  const handleSortChange = (e) => setSortOrder(e.target.value);

  return (
    <>
      <SortSelector sortOrder={sortOrder} onChange={handleSortChange} />
      <CommentsList
        comments={sortedComments}
        replies={replies}
        onReply={onReply}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </>
  );
};

const SortSelector = ({ sortOrder, onChange }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
    <select value={sortOrder} onChange={onChange} className="border border-gray-300 rounded-md p-2 w-23 flex flex-end">
      <option value="desc" className="bg-gray-100">new</option>
      <option value="asc" className="bg-gray-100">old</option>
    </select>
  </div>
);

const CommentsList = ({ comments, replies, onReply, onEdit, onDelete }) => (
  <div>
    {comments.map((comment) => (
      <Comment
        className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
        key={comment.id}
        comment={comment}
        replies={replies.filter((reply) => reply.parentId === comment.id)}
        onReply={onReply}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default CommentList;