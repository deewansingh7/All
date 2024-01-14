import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../utils/axiosClient';

function Home() {

    const [post, setPost] = useState('');
    useEffect(() => {
        getPost();
    }, []);

    async function getPost() {
        const response = await axiosClient.get('/api/post/all');
        // console.log(response);
        setPost(response.data.result);
    }

    return (
        <div>
            {post}
        </div>
    )
}

export default Home