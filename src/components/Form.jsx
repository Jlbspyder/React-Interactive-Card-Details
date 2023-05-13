import { useForm } from "react-hook-form";

const Form = ({
  name,
  setName,
  digits,
  setDigits,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc,
  setConfirm,
}) => {
  const methods = useForm();

  const submitForm = () => {
    setConfirm(true);
  };

  return (
  
    <form className="form" onSubmit={methods.handleSubmit(submitForm)}>
      <div className="form-control">
        <div className="name-input">
          <label>CARDHOLDER NAME</label>
          <input
            {...methods.register("fullname", {
              required: true,
              pattern: /[A-Za-z]/,
            })}
            type="text"
            placeholder="e.g. Jane Appleseed"
            name="fullname"
            maxLength={24}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          {methods.formState?.errors?.fullname?.type === "required" && (
            <small>Can't be blank</small>
          )}
        </div>
        <div className="digit-input">
          <label>CARD NUMBER</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            className="input"
            {...methods.register("number", {
              required: true,
              validate: {
                matchPattern: (v) => /^[0-9 ]+/.test(v),
              },
            })}
            name="number"
            value={digits
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            maxLength={19}
            onChange={(e) => setDigits(e.target.value)}
          />
          {methods.formState?.errors?.number?.type === "required" && (
            <small>Can't be blank</small>
          )}
          {methods.formState?.errors?.number?.type === "matchPattern" && (
            <small>Wrong format, numbers only</small>
          )}
        </div>
        <div className="expiry">
          <div className="date-label">
            <label className="expdate">EXP. DATE</label>
            <label className="expmonth">(MM/YY)</label>
            <label className="security">CVC</label>
          </div>
          <div className="date-input">
            <div className="flex-month">
              <input
                type="text"
                {...methods.register("month", {
                  required: true,
                  validate: {
                    matchPattern: (v) => /^[0-9]+$/.test(v),
                  },
                })}
                placeholder="MM"
                id="input-month"
                name="month"
                maxLength={2}
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              {methods.formState?.errors?.month?.type === "required" && (
                <small className="error">Can't be blank</small>
              )}
              {methods.formState?.errors?.month?.type === "matchPattern" && (
                <small className="error">Numbers only</small>
              )}
            </div>
            <div className="flex-year">
              <input
                type="text"
                {...methods.register("year", {
                  required: true,
                  validate: {
                    matchPattern: (v) => /^[0-9]+$/.test(v),
                  },
                })}
                placeholder="YY"
                id="input-exp"
                name="year"
                maxLength={2}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              {methods.formState?.errors?.year?.type === "required" && (
                <small className="error2">Can't be blank</small>
              )}
              {methods.formState?.errors?.year?.type === "matchPattern" && (
                <small className="error2">Numbers only</small>
              )}
            </div>
            <div className="flex-cvc">
              <input
                {...methods.register("security", {
                  required: true,
                  validate: {
                    matchPattern: (v) => /^[0-9]+$/.test(v),
                  },
                })}
                type="text"
                placeholder="e.g. 123"
                id="cvc"
                name="security"
                maxLength={3}
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
              {methods.formState?.errors?.security?.type === "required" && (
                <small className="error3">Can't be blank</small>
              )}
             
              {methods.formState?.errors?.security?.type === "matchPattern" && (
                <small className="error3">Numbers only</small>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className="btn">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Form;
