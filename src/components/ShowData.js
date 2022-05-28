import React from "react";
import { useDataContext } from "../StepContext";

function ShowData() {
  const { data } = useDataContext();
  const PersonalDetails = data[0];
  const AddressDetails = data[1];
  const PaymentDetails = data[2];

  return (
    <div>
      <h1 className="font-bold text-lg">Personal Details</h1>
      <p>First Name: {PersonalDetails?.firstName}</p>
      <p>Last Name: {PersonalDetails?.lastName}</p>
      <p>Email: {PersonalDetails?.email}</p>
      <p>Contact Number: {PersonalDetails?.contactNumber}</p>

      <h2 className="font-bold text-lg">Address Details</h2>
      <p>Address: {AddressDetails?.address}</p>
      <p>City: {AddressDetails?.city}</p>
      <p>Pincode: {AddressDetails?.pincode}</p>
      <p>state: {AddressDetails?.state}</p>

      <h2 className="font-bold text-lg">Payment Details</h2>
      <p>Name on Card: {PaymentDetails?.name}</p>
      <p>Card Number: {AddressDetails?.cardNumber}</p>
      <p>Expiry Date: {AddressDetails?.expiryDate}</p>
      <p>CVV: {AddressDetails?.cvv}</p>
    </div>
  );
}

export default ShowData;
