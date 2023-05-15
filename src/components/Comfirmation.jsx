const Comfirmation = ({
  setConfirm,
  setCvc,
  setDigits,
  setMonth,
  setName,
  setYear,
}) => {
  const reset = () => {
    setConfirm(false);
    setName("");
    setDigits("");
    setMonth("");
    setYear("");
    setCvc("");
  };
  return (
    <div className="confirm">
      <img
        src="./images/icon-complete.svg"
        alt="complete"
        className="thank-you"
      />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button onClick={reset} className="btn-continue">
        Continue
      </button>
    </div>
  );
};

export default Comfirmation;
