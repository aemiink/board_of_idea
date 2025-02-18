import Post from "./Post";
import classes from "./ListofPosts.module.css"
import {useState, useEffect} from "react";

function ListofPosts() {
    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json()
            setPosts(resData.posts); 
            setIsFetching(false);
        }
        fetchPosts()
    }, []);
    
    return (
        <>
        {!isFetching && posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post key={post.postText} author={post.author}  postText={post.postText}/>
                ))}
            </ul>
        )} 
        {!isFetching && posts.length === 0 && (
            <div style={{textAlign:'center', color:'white'}}>
                <h2> There are no posts yet.</h2>
                <p> Start adding some!</p>
            </div>
        )}       
        {isFetching && (
            <div style={{textAlign:'center', color:'white'}}>
                <h2> Loading Posts...</h2>
                <p> Please wait for us.</p>
            </div>)
        }
        </>
    )
}
export default ListofPosts;