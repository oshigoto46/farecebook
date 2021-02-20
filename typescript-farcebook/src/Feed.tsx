import React, { useState, useEffect } from "react";
import _ from  "lodash"; 
import Comments from "./Comments";

// function extractNotification (json: any): number{
//     console.log(json)
//     const notifications :any[] = json.notifications
//     // return notifications.map((notification: any) => {
//     //    console.log(notification)
//     //   //  return{
//     //   //    posts: notification
//     //   //   } 
//     // })
//     //return notifications;
//     //return (_.keys(json.posts).length);
//     //eturn json.posts;
// }

const FeedAPI = () => {
  const [count, setCount] = useState(0);
　
  const url = "http://54.65.109.14:3000/api/feed";

  useEffect(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log((json.posts))
          // return json
          //return extractBooks(json);
        })
        .catch((err) => {
          console.error(err);
        });
    
  }, []);
  
  return <div><Comments></Comments></div>;
};

export default FeedAPI;
