import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost, clearPost } from "../redux/actions";
import Comments from "./Comments";
import Loading from "./Loading";

function Post() {
  let { postid } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(postid));
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, postid]);

  useEffect(() => {
    document.title = post?.title || 'Blog';
  }, [post]);

  if(post?.title){
    return (
      <div>
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
        <Comments id={postid} />
      </div>
    );
  } else {
    return(
      <Loading />
    )
  }
  
}

export default Post;
