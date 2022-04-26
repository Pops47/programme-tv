function Section({ time, title, type, duration, image, isUnseen, direct }) {
  return (
    <div className="container">
      <span className="content-left bold">{time}</span>
      <img className="content-left" src={image} alt={`affiche de ${title}`} />
      <div className="right-column">
        <p className="bold">{title}</p>
        <div>
          <p>{type}</p>
          <div>
            <span className="bold">{duration}</span>
            {direct && <span className="red">• direct</span>}
            {isUnseen && <span className="red">• inédit</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
