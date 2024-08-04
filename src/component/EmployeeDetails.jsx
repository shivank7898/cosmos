import React, { useEffect, useState } from "react";
import axiosInstance from "../api"; // Import the Axios instance
import { useParams } from "react-router-dom";

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/${id}`)
      .then((response) => setEmployee(response.data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div className="employee-details">
      <h1>Employee Details</h1>
      <p>Name: {employee.employee_name}</p>
      <p>
        Address: {employee.employee_address.street_address},{" "}
        {employee.employee_address.city_name},{" "}
        {employee.employee_address.country_name},{" "}
        {employee.employee_address.postal_code}
      </p>
      <p>Contact Methods:</p>
      <ul>
        {employee.contact_info.map((contact, index) => (
          <li key={index}>
            {contact.method_type}: {contact.contact_value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeDetails;
