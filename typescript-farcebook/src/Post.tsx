
import React, { useState, useEffect } from "react";
import _ from  "lodash"; 

const Post = () =>{


    const [posts, setPosts] = useState(0);

    const url = "http://54.65.109.14:3000/api/feed";

    useEffect(() => {
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((json) => {
            console.log((json.posts))
            setPosts(json.posts)
            // return json
            //return extractBooks(json);
          })
          .catch((err) => {
            console.error(err);
          });
      
    }, []);

    // render(){
    //     const parentComments = comments.filter( comment => {
    //         return !Boolean(comment.parent_comment_id)
    //       })
    // }

}

export default Post;