const BackCard = ({ cvc }) => {
  return (
    <div className="back-card">
      <img src="./images/bg-card-back.png" alt="card" className="back" />
      {!cvc ? <p>000</p> : <p>{cvc}</p>}
    </div>
  );
};

export default BackCard;
