import React from 'react'
import data from '../data.json'
import './Articles.css'



const Articles = () => {
    console.log(data)
    // Creating a new array of values of every key. It's an array of arrays and the first array(key) is basketball here.
    const sportData = Object.values(data)
    return (
        <div className="articles-container">
            {/* Loop through every array in data file. We're calling this "sport". First index is "basketball". */}
          {sportData.map((sport) => {
            // Loop through every item within first index, which are "articles" aka the data within basketball. "Articles" is being passed through second map.
            // Normally, data would have an id, which would be article.id in this case
                return sport.map((article, index) => {
                    // Key is a way to identify things. Needs a unique value to be rendered, which is index here.
                    // Most of the time this would be an id
                return (<div className="article" key={index}>
                <img src={article.img} alt={article.img_alt}/>
                <div className='articles-text'>
                    <h2>Article {article.article_number}</h2>
                    <p>{article.description}</p>
                </div>
            </div>) })
                
                
                
    })}
        </div>


    )
}


// keys gets name
// values gets values of key



// data[sport].map. Would have to make line 10 keys instead of values for above to work
// data["basketball"].data
// 







export default Articles;