const FrontCard = ({ name, digits, month, year }) => {
  return (
    <div className="front-card">
      <img src="./images/card-logo.svg" alt="" className="logo" />
      <img src="./images/bg-card-front.png" alt="card" className="front" />
      {!digits ? (
        <p className="digits">0000 0000 0000 0000</p>
      ) : (
        <p className="digits">{digits}</p>
      )}
      <div className="details">
        <div className="name">
          {!name ? <h6>JANE APPLESSED</h6> : <h6>{name}</h6>}
        </div>
        <div className="date">
          {!month && !year ? (
            <h6>00/00</h6>
          ) : (
            <h6>
              {month}/{year}
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
