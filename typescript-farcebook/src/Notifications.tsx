import React, { useState, useEffect } from "react";
import {Notify} from "./Notify";
import NotiflyItem from "./NotiflyItem";

    //   notifications[{"id":1,"created_at":
    //   "2021-02-07T07:17:51.000Z",
    //   "sourceItemId":2,"sourceItemType":"User","notifierId":2,
    //   "likeNotification":false,"topLevelComment":false,
    //    "unread":true}]


const Notifications = () => {

    const [count, setCount] = useState(0);
    //const [notify, setNotify] = useState([] as Notify[]);
    const [notifications , setNotifications ] = useState([] as Notify[]);
    useEffect(() => {
     // const  getNotifications = () => {
        const url = "http://54.65.109.14:3000/api/feed";
        fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
           const notifications :any[] = json.notifications
           console.log("notifications" + JSON.stringify(notifications[0]));
           setNotifications(notifications);
        })
        .catch((err) => {
          console.error(err);
        });
      },[]);

      const notificationsItems = notifications.map((n,idx) =>{
       return( 
             <NotiflyItem notification={n}/>)
      })

      return <div>{notificationsItems}</div>;
};

export default Notifications;