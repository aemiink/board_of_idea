import classes from './Post.module.css'

function Post({author, postText}) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{postText}</p>
        </li>
    )
}

export default Post;