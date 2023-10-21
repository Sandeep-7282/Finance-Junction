import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className={`card`} style={{backgroundColor:props.Mode==='light'?'#aab8b6':'#383838'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        position: 'absolute',
                        left: '0'
                    }
                    }> 
                        <span className={`badge rounded-pill bg-dark`}> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className={`card-title text-${props.Mode==='light'?'dark':'light'}`}>{title}</h5>
                        <p className={`card-title text-${props.Mode==='light'?'dark':'light'}`}>{description}</p>
                        <p className={`card-title text-${props.Mode==='light'?'dark':'light'}`}><small className={`text-muted text-${props.Mode==='light'?'dark':'light'}`}>By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${props.Mode==='light'?'success':'info'}`} >Read More</a>
                    </div>
                </div>
            </div>
        )
     
}
export default NewsItem
