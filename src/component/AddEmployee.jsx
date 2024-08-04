import React, { useState } from "react";
import axiosInstance from "../api"; // Import the Axios instance
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState({
    street_address: "",
    city_name: "",
    country_name: "",
    postal_code: "",
  });
  const [contactInfo, setContactInfo] = useState([
    { method_type: "EMAIL", contact_value: "" },
  ]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("", {
        employee_name: employeeName,
        employee_address: employeeAddress,
        contact_info: contactInfo,
      })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error adding employee:", error));
  };

  return (
    <div className="add-employee">
      <h1>Add Employee</h1>
      {/* {error && <p className="error">{error}</p>} */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </label>
        <label>
          Street Address:
          <input
            type="text"
            value={employeeAddress.street_address}
            onChange={(e) =>
              setEmployeeAddress({
                ...employeeAddress,
                street_address: e.target.value,
              })
            }
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={employeeAddress.city_name}
            onChange={(e) =>
              setEmployeeAddress({
                ...employeeAddress,
                city_name: e.target.value,
              })
            }
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={employeeAddress.country_name}
            onChange={(e) =>
              setEmployeeAddress({
                ...employeeAddress,
                country_name: e.target.value,
              })
            }
            required
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            value={employeeAddress.postal_code}
            onChange={(e) =>
              setEmployeeAddress({
                ...employeeAddress,
                postal_code: e.target.value,
              })
            }
            required
          />
        </label>
        <div className="contact-methods">
          <h2>Contact Methods</h2>
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-method">
              <label>
                Method Type:
                <select
                  value={contact.method_type}
                  onChange={(e) => {
                    const newContactInfo = [...contactInfo];
                    newContactInfo[index].method_type = e.target.value;
                    setContactInfo(newContactInfo);
                  }}
                >
                  <option value="EMAIL">EMAIL</option>
                  <option value="PHONE">PHONE</option>
                </select>
              </label>
              <label>
                Value:
                <input
                  type="text"
                  value={contact.contact_value}
                  onChange={(e) => {
                    const newContactInfo = [...contactInfo];
                    newContactInfo[index].contact_value = e.target.value;
                    setContactInfo(newContactInfo);
                  }}
                  required
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setContactInfo([
                ...contactInfo,
                { method_type: "EMAIL", contact_value: "" },
              ])
            }
            className="add-contact-button"
          >
            Add Contact Method
          </button>
        </div>
        <button type="submit" className="submit-button">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
