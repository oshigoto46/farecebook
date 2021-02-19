import { useState } from "react";
import FeedAPI from "./Feed";

function App({}) {
  const [body, setBody] = useState("");

  const onChange = (event: any) => {
    setBody(event.target.value);
  };

  return (
    <>
      <div>Input value: {body}</div>
      <textarea
        value={body}
        onChange={onChange}
        onKeyPress={onChange}
        placeholder="please write something"
      />
      <FeedAPI></FeedAPI>
      <div> {body}</div>
    </>
  );
}

export default App;
