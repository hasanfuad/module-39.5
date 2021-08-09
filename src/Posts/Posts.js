import React from 'react';
import { useHistory } from 'react-router-dom';

const Posts = (props) => {
    const {title,id} = props.post;


    const styles ={
        border: '1px solid lightGray',
        padding: '10px',
        margin: '10px'
    }

    const history = useHistory();

    const handleBtn= () => {
         return history.push(`/post/${id}`)
    }
    return (
        <div style={styles}>
            <h3>{title}</h3>
            {/* <Link to={`/post/${id}`}></Link> */}
            <button onClick={handleBtn}>See more..</button>
        </div>
    );
};

export default Posts;