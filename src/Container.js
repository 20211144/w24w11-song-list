const Container = (props) => {
    return (
      <>
        <div className='container'>
            <a href={`https://www.youtube.com/results?search_query=${props.song.title}`} 
            target="_black"
            rel="noreferrer">
              <img 
                src={`https://picsum.photos/600/150?random=${props.song.id}`}
                alt={`${props.song.title} 이미지`}/>
              <div className='song-title'>
                {props.song.title} ({props.song.singer})
              </div>
            </a>
        </div>
        {props.song.lyrics && (
          <pre className="song-lyrics">
            {props.song.lyrics}  
          </pre>
        )}
      </>
    )
}

export default Container