import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDataContext, useStepperContext } from "../../StepContext";

function PersonalDetails() {
  const { setStep } = useStepperContext();
  const { data, setData } = useDataContext();

  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
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
      setStep(2);
      navigate("/address-details");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setdisabled(true);
      setData(formValues);
      console.log(data);
    }
  }, [formErrors, isSubmit, formValues, setData, data]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //first name Validation
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    } else if (values.firstName.length < 4) {
      errors.firstName = "First name must be <= 4 characters";
    }

    //Last name Validation
    if (!values.lastName) {
      errors.lastName = "First name is required!";
    } else if (values.lastName.length < 4) {
      errors.lastName = "First name must be more than 4 characters";
    }

    //Contact number Validation
    if (!values.contactNumber) {
      errors.contactNumber = "Last name is required!";
    } else if (values.contactNumber.match(/\d/g).length !== 10) {
      errors.contactNumber = "This is not a valid contact number!";
    }

    //email Validation
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <FaUser style={{ fontSize: "20px" }} />
      <h1 className="font-bold text-lg text-black text-center py-5">
        Personal Details
      </h1>

      <form className="flex flex-col w-full mt-5" onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          value={formValues.firstName}
          onChange={handleChange}
        />
        {formErrors.firstName && (
          <p className="text-sm text-red-400">{formErrors.firstName}</p>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          value={formValues.lastName}
          onChange={handleChange}
        />
        {formErrors.lastName && (
          <p className="text-sm text-red-400">{formErrors.lastName}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email..."
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <p className="text-sm text-red-400">{formErrors.email}</p>
        )}
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className="border-b-2 border-slate-100 mb-2 p-2 placeholder:text-base outline-none focus:border-green-300 "
          value={formValues.contactNumber}
          onChange={handleChange}
        />
        {formErrors.contactNumber && (
          <p className="text-sm text-red-400">{formErrors.contactNumber}</p>
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

export default PersonalDetails;
