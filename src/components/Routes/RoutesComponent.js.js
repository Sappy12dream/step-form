import React from "react";
import { Route, Routes } from "react-router-dom";
import ShowData from "../ShowData";
import AddressDetails from "../Steps/AddressDetails";
import PaymentDetails from "../Steps/PaymentDetails";
import PersonalDetails from "../Steps/PersonalDetails";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<PersonalDetails />} />
      <Route path="/address-details" element={<AddressDetails />} />
      <Route path="/payment-details" element={<PaymentDetails />} />
      <Route path="/show-data" element={<ShowData />} />
    </Routes>
  );
}

export default RoutesComponent;
