import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data.slice(0,10)))
    },[])
    return (
        <div>
            {
                posts.map(ps => <Posts post = {ps}/>)
            }
        </div>
    );
};

export default Home;