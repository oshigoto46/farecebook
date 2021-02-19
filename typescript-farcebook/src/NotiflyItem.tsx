import {Notify} from "./Notify";

type NotifyProps ={
    notification: Notify;
}

const NotiflyItem =  (props: NotifyProps) =>{
    const {created_at, notifierId} = props.notification;
    return (
        <div> {created_at} 
              <br></br>
              {notifierId} </div>
    )
}

export default NotiflyItem;