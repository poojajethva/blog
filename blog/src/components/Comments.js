import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/actions";
import Loading from "./Loading";

function Comments({ id }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [expand, setExpand] = useState(false);
  const loadComments = () => {
    setExpand(!expand);
    if (comments.length === 0) dispatch(getComments(id));
  };

  return (
    <div>
      <button onClick={loadComments}>{!expand ? 'Load Comments' : 'Hide Comments'}</button>
      <ul className="comments">
        {comments?.length > 0 && expand &&
          comments?.map((comment) => {
            return (
              <li key={comment?.id}>
                <h4>{comment?.name}</h4>
                <p>{comment?.body}</p>
                <p><b>Email:</b> {comment?.email}</p>
              </li>
            );
          })}
          {comments?.length === 0 && expand && <Loading />}
      </ul>
    </div>
  );
}

export default Comments;
