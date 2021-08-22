import React from "react";
import Button from "./UI/button/Button";
import {useHistory} from "react-router-dom"

const PostItem = ({post, number, remove}) => {
   const history = useHistory()
  return (
    <div className="post">
      <div className="post__content">
        <strong>{number} {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => history.push(`/posts/${post.id}`)}>Открыть</Button>
        <Button onClick={() => remove(post)}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;
