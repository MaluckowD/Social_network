import s from "./LinkPost.module.css"
import React from "react";

const LinkPost = () =>{
  let newElementpost = React.createRef();

  let addpost = () => {
    let text = newElementpost.current.value;
    alert(text);
  }
  return (
    <div className={s.links}>
      <textarea ref={newElementpost}></textarea>
      <a href="" className={s.postphoto}>Post a photo</a>
      <button onClick = { addpost } className={s.postjob}>Post a Job</button>
    </div>
  )
}

export default LinkPost