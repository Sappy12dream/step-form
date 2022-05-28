import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDataContext, useStepperContext } from "../../StepContext";

function AddressDetails() {
  const { setStep } = useStepperContext();
  const { setData } = useDataContext();

  const navigate = useNavigate();
  const initialValues = {
    address: "",
    city: "",
    pincode: "",
    state: "",
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
      setStep(3);
      navigate("/payment-details");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setdisabled(true);
      setData((oldData) => [oldData, formValues]);
    }
  }, [formErrors, isSubmit, formValues, setData]);

  const validate = (values) => {
    const errors = {};

    if (!values.address) {
      errors.address = "Address is required!";
    }

    if (!values.city) {
      errors.city = "City is required!";
    }

    if (!values.pincode) {
      errors.pincode = "Pincode is required!";
    }

    if (!values.state) {
      errors.state = "state is required!";
    }

    return errors;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <FaMapMarkerAlt style={{ fontSize: "20px" }} />
      <h1 className="font-bold text-lg text-black text-center py-5">
        Address Details
      </h1>
      <form className="flex flex-col w-full mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Address"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          name="address"
          value={formValues.address}
          onChange={handleChange}
        />
        {formErrors.address && (
          <p className="text-sm text-red-400">{formErrors.address}</p>
        )}
        <input
          type="text"
          placeholder="City"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          name="city"
          value={formValues.city}
          onChange={handleChange}
        />
        {formErrors.city && (
          <p className="text-sm text-red-400">{formErrors.city}</p>
        )}
        <input
          type="text"
          placeholder="Pincode"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300"
          name="pincode"
          value={formValues.pincode}
          onChange={handleChange}
        />
        {formErrors.pincode && (
          <p className="text-sm text-red-400">{formErrors.pincode}</p>
        )}
        <input
          type="text"
          placeholder="State"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          name="state"
          value={formValues.state}
          onChange={handleChange}
        />
        {formErrors.state && (
          <p className="text-sm text-red-400">{formErrors.state}</p>
        )}
        <button
          type="submit"
          className="mt-5 w-full bg-green-400 py-2 rounded-md text-base text-white font-bold text-center"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default AddressDetails;
