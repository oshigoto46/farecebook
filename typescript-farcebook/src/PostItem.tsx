import {Posts} from "./Posts";

type PostsProps ={
    posts: Posts;
}

const PostsItem =  (props: PostsProps) =>{
    const {body,comment_ids} = props.posts;
    return (
        <div>-------post👇 -------  <br></br>
        {body} {comment_ids}
        <br></br>
        -------post 👆-------  <br></br> <br></br></div>
    )
}

export default PostsItem;