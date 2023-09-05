import React, {useEffect, useState} from 'react'
import NewsItem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";
import Footer from './Footer';

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/everything?q=${props.word}&sortBy=publishedAt&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
       setPage(page+1)
        setLoading(true)
        let data = await fetch(url);
        console.log(data)
        props.setProgress(30);
        let parsedData = await data.json()
        console.log(parsedData);
        props.setProgress(70);
        setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
      updateNews(); 
  }, [])
    const fetchMoreData = async () => { 
        const url = `https://newsapi.org/v2/everything?q=${props.word}&sortBy=publishedAt&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
       setPage(page+1)
       let data = await fetch(url);
        console.log(data)
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
               {((totalResults===0))?'':<div className="container">
                <h1 className={`text-center text-${props.Mode==='light'?'success':'info'}`} style={{ margin: '35px 0px', marginTop: '90px' }}>Top News on {capitalizeFirstLetter(props.word)}</h1></div>}
                {(totalResults===0)?<div className="container">
               <h1 className={`text-center text-${props.Mode==='light'?'dark':'light'}`}>No News On Selected Category</h1></div>:''
               }
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={(articles.length)}
                    next={fetchMoreData}
                    hasMore={(articles.length) !== totalResults}
                    loader={(articles.length) !== totalResults?<Spinner/>:<Footer/>}> 
                    <div className="container">
                    <div className="row d-flex">
                    {articles.map((element,i) => {
  if (element && element.title) {
    return (
      <div className="col-md-4" key={i}>
        <NewsItem
          title={element.title}
          description={element.description ? element.description : ""}
          imageUrl={element.urlToImage}
          newsUrl={element.url}
          author={element.author}
          date={element.publishedAt}
          source={element.source.name}
          Mode={props.Mode}
        />
      </div>
    );
  }
  return null; 
})}


                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}
News.defaultProps = {
    pageSize: 8,
    word:'economics'
}

News.propTypes = {
    pageSize: PropTypes.number,
    word: PropTypes.string,
}

export default News
