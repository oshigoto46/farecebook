
import React, { useState, useEffect } from "react";
import _ from  "lodash"; 
import  {Posts} from "./Posts"
import PostsItem from "./PostItem"

const Comments = () =>{


    const [posts, setPosts] = useState([] as Posts[]);

    const url = "http://54.65.109.14:3000/api/feed";

    useEffect(() => {
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((json) => {
            const _posts :any[] = _.reverse(_.values(json.posts));
             console.log("json.posts=========" + _posts);
            setPosts(_posts);
          })
          .catch((err) => {
            console.error(err);
          });
      
    }, []);

    const  ppstsItems = posts.map((p,idx) =>{
      return( 
            <PostsItem posts={p}/>)
     })
   
    // const parentComments = comments.filter( comment => {
    //         return !Boolean(comment.parent_comment_id)
    // })
    // return  <div>{parentComments}</div>;

     //return  <div>aaaaaaaaaaa{posts}</div>;  
    return  <div> {ppstsItems} </div>;  
}



export default Comments;