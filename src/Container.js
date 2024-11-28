import { useState } from "react"

const Container = (props) => {
  const [lyricsExpanded, setLyricsExpanded] = useState(false)
  const togglelyrics = () => {
    setLyricsExpanded(prevState => !prevState)
  }
    return (
      <>
        <div className='container'>
        <img 
                src={`https://picsum.photos/600/150?random=${props.song.id}`}
                alt={`${props.song.title} 이미지`}
                onClick={togglelyrics}/>
            <a href={`https://www.youtube.com/results?search_query=${props.song.title}`} 
            target="_black"
            rel="noreferrer">
              <div className='song-title'>
                {props.song.title} ({props.song.singer})
              </div>
            </a>
        </div>
        {props.song.lyrics && lyricsExpanded &&(
          <pre 
          className="song-lyrics"
          onClick={togglelyrics}>
            {props.song.lyrics}  
          </pre>
        )}
      </>
    )
}

export default Container