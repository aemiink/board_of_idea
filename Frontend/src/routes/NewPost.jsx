import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import {useState} from "react";


function NewPost({onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [postAuthor, setPostAuthor] = useState('');


    function bodyChangeHandler(evt) {
        setEnteredBody(evt.target.value);
    }

    function autoChangeHandler(evt) {
        setPostAuthor(evt.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            postText: enteredBody,
            author: postAuthor
        };
        onAddPost(postData);
        onCancel();
    }
    
    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}s>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required  onChange={autoChangeHandler}/>
                </p>
                <p className={classes.actions}>
                    <Link type='button' to='..'> Cancel </Link>
                    <button> Submit </button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;