import React, { useEffect, useState } from 'react'
import Card from './Card';

function News(Props) {
    const API_KEY = 'c246d684b9994a7588741e8ef81a4fb5';
    // const [result, setResult] = useEffect('');
    const newVar = Props.searchData;
    console.log(newVar);
    const uri = `https://newsapi.org/v2/everything?q=${newVar}&from=2023-11-20&sortBy=publishedAt&apiKey=${API_KEY}`;
    const [newsData, setNewsData] = useState([]);


    const func = async () => {
        const response = await fetch(uri);
        const data = await response.json();
        setNewsData(data.articles);
        // console.log(data.articles);
    }

    useEffect(() => {
        func();
    }, [newVar]);

    const divStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '150px'
    }
    return (
        <div style={divStyle}>
            {
                newsData.map((x) => {
                    return (
                        <Card newUrl={x.url} url={x.urlToImage} title={x.title} data={x.content} />
                    )
                })
            }
        </div>
    )
}

export default News