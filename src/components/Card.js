function Card(props) {
  console.log(props);
  return (
    <>
      <div className="box">
        <div className="container">
          <img
            src={`/images/${props.image}`}
            className="img"
            alt="Mount Fuji"
          />
          <div className="details">
            <div className="location">
              <i className="fas fa-map-marker-alt pin-icon"></i>
              <span>{props.location}</span>
              <a className="maps" href={props.maps}>
                View on Google maps
              </a>
            </div>
            <h1 className="description-title">{props.name}</h1>
            <p className="description">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

/*
      <div className="card">
        <div className="card--badge">Japan</div>
        <img src="mountfuji.jpg" alt="Grid" className="card--image"></img>
        <div className="card--stats">
          <span>mountfuji</span>
          <span className="gray">title</span>
          <span className="gray">description</span>
        </div>
      </div>
      */
