import React, { useEffect, useState } from "react";
import axiosInstance from "../api"; // Import the Axios instance
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("", {
        params: {
          limit: 10,
          offset: 0,
        },
      })
      //   .then((response) => console.log(response.data.data))
      .then((response) => setEmployees(response.data.data))
      //   console.log(employees)
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  console.log("emp", employees);

  return (
    <div className="employee-list">
      <h1 className="employee-list__title">Employee List</h1>
      {employees.length === 0 ? (
        <p className="employee-list__empty">No Employees in the system</p>
      ) : (
        <ul className="employee-list__items">
          {employees.map((employee) => (
            <li key={employee._id} className="employee-list__item">
              <span>
                {employee.employee_name} - {employee._id}
              </span>
              <div className="employee-list__actions">
                <Link
                  to={`/employee/${employee._id}`}
                  className="employee-list__link"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleDelete(employee._id)}
                  className="employee-list__button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add" className="employee-list__add-link">
        Add New Employee
      </Link>
    </div>
  );

  function handleDelete(_id) {
    console.log("ss", _id);
    axiosInstance
      .delete(`/${_id}`)
      .then(() => setEmployees(employees.filter((e) => e._id !== _id)))
      .catch((error) => console.error("Error deleting employee:", error));
  }
}

export default EmployeeList;
