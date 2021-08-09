import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    console.log(postId);
    
    const [postDetail, setPostDetail] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    },[postId]);

    const {title,body} = postDetail;

    const styleDetail = {
        border: '1px solid lightGray',
        padding: '10px',
        margin: '10px',
        width: '50%',
        position: 'relative',
        left: '300px'
    }


    return (
        <div style={styleDetail}>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to="/home"><button>..back to home</button></Link>

        </div>
    );
};

export default PostDetails;