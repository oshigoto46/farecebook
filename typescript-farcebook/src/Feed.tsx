import React, { useState, useEffect } from "react";

function extractNotification (json: any): any{
    const notifications :any[] = json.notifications
    return notifications.map((notification: any) => {
       console.log(notification)
       return{
         posts: notification
        } 
    })
}

const FeedAPI = () => {
  const url = "http://54.65.109.14:3000/api/feed";

  useEffect(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          extractNotification(json)
           return json
          //return extractBooks(json);
        })
        .catch((err) => {
          console.error(err);
        });
    
  }, []);
  return <div></div>;
};

export default FeedAPI;
