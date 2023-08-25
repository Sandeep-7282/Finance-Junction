import React from 'react'

export default function About(props) {
 
  return (
    <div className="cont">
    <div className={` text-${props.Mode==='light'?'dark':'light'}`}>
    <h1 className={` text-${props.Mode==='light'?'success':'info'}`}>About Journal</h1>
      <div className='container '>
      
<p>This is an adaptable digital journaling platform designed to accommodate diverse user needs, enabling efficient organization and recording of thoughts. Whether it's capturing personal reflections, reacting to news stories, or managing projects, our system ensures valuable insights are never lost.

Users can seamlessly jot down their thoughts, perspectives, and responses to news articles, capturing the essence of their reactions. By doing so, they create a repository of personalized insights that can be revisited whenever needed.<br></br> This system serves as an ideal tool for those moments when past reflections are crucial for making informed decisions.

Incorporating this journaling mechanism into a newsreader's routine enhances engagement with current affairs. It enables users to make brief yet meaningful notes alongside news articles, preserving their unique perspective. When the time comes to recall or build upon these thoughts, the journal becomes an invaluable resource.
</p>
</div>

    </div>
    <div className='new'>
      <h1 className={` text-${props.Mode==='light'?'success':'info'}`}>How To Use</h1>
      <div className={`container text-${props.Mode==='light'?'dark':'light'}`}>
        <p>As mentioned earlier different users can use in different ways. Look for these examples <br></br>Entrepreneurs can employ it for brainstorming and tracking business ideas. Students can utilize it for academic notes and research insights.The platform fetches news from diverse financial markets, aiding investors and traders in strategy planning based on market news analysis. Securely stored, these insights empower users to adapt the system to their needs, ensuring valuable information is readily available whenever inspiration strikes.</p>
      </div>
    </div>
    </div>
  )
}
