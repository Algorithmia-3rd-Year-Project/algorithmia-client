// CommentContext.js
import React, { createContext, useState } from 'react';

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  );
};

export { CommentContext, CommentProvider };
