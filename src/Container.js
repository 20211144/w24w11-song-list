const Container = (props) => {
    return (
      <div className='container'>
          <a href={`https://www.youtube.com/results?search_query=${props.title}`} target="_black">
            <img 
              src={`https://picsum.photos/600/150?random=${props.index}`}
              alt={`${props.title} 이미지`}/>
            <div className='song-title'>
              {props.title}
            </div>
          </a>
      </div>
    )
}

export default Container