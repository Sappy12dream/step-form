import { useNavigate } from "react-router-dom";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useDataContext } from "../../StepContext";

function PaymentDetails() {
  const navigate = useNavigate();
  const { setData } = useDataContext();

  const initialValues = {
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [disabled, setdisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (disabled) {
      navigate("/show-data");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setdisabled(true);
      setData((oldData) => [...oldData, formValues]);
    }
  }, [formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name on Card is required!";
    }

    if (!values.cardNumber) {
      errors.cardNumber = "Card number is required!";
    }

    if (!values.expiryDate) {
      errors.expiryDate = "Expiry date is required!";
    }

    if (!values.cvv) {
      errors.cvv = "CVV is required!";
    }

    return errors;
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <RiSecurePaymentFill style={{ fontSize: "26px" }} />
      <h1 className="font-bold text-lg text-black text-center py-5">
        Payment Details
      </h1>

      <form className="flex flex-col w-full mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name on Card"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        {formErrors.name && (
          <p className="text-sm text-red-400">{formErrors.name}</p>
        )}
        <input
          type="text"
          placeholder="Card Number"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          name="cardNumber"
          value={formValues.cardNumber}
          onChange={handleChange}
        />
        {formErrors.cardNumber && (
          <p className="text-sm text-red-400">{formErrors.cardNumber}</p>
        )}
        <input
          type="Date"
          placeholder="Expiry Date"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          name="expiryDate"
          value={formValues.expiryDate}
          onChange={handleChange}
        />
        {formErrors.expiryDate && (
          <p className="text-sm text-red-400">{formErrors.expiryDate}</p>
        )}
        <input
          type="number"
          placeholder="CVV"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300"
          name="cvv"
          value={formValues.cvv}
          onChange={handleChange}
          maxLength="3"
        />
        {formErrors.cvv && (
          <p className="text-sm text-red-400">{formErrors.cvv}</p>
        )}
        <button
          type="submit"
          className="mt-5 w-full bg-green-400 py-2 rounded-md text-base text-white font-bold text-center"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default PaymentDetails;
