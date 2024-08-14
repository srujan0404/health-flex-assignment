import React from "react";
import useStore from "./store/useStore";
import CommentForm from "./Forms/CommentForm";
import CommentList from "./Components/CommentList";

const App = () => {
  const {
    comments,
    replies,
    addComment,
    editComment,
    deleteComment,
    addReply,
    editReply,
    deleteReply,
  } = useStore();

  const handleEdit = (id, newText) => {
    const isComment = comments.some((comment) => comment.id === id);
    isComment ? editComment(id, newText) : editReply(id, newText);
  };

  const handleDelete = (id) => {
    const isComment = comments.some((comment) => comment.id === id);
    if (isComment) {
      deleteComment(id);
      deleteAssociatedReplies(id);
    } else {
      deleteReply(id);
    }
  };

  const deleteAssociatedReplies = (commentId) => {
    replies
      .filter((reply) => reply.parentId === commentId)
      .forEach((reply) => deleteReply(reply.id));
  };

  return (
  
    <div className="max-w-[600px] mx-auto bg-white p-4 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <CommentForm
        className="bg-gray-100 p-4 rounded-lg shadow-md"
      onSubmit={addComment} />
      <CommentList
        className="bg-gray-100 p-4 rounded-lg shadow-md"
        comments={comments}
        replies={replies}
        onReply={addReply}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;