# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Employee Management App

This is a simple React application designed to manage employee data. The application allows users to view a list of employees, see details of each employee, and add new employees to the system. The application uses Axios for making HTTP requests and React Router for navigation between pages.

## Features

- **Employee Listing Page**: Displays a list of all employees. Users can view employee details or delete an employee.
- **Employee Details Page**: Provides detailed information about a specific employee, including their address and contact methods.
- **Add Employee Page**: Allows users to add a new employee to the system.

## Installation

To set up the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/shivank9131/cosmo.git
    cd cosmo
    ```

2. Install the dependencies:
    ```sh
    npm install axios react-router-dom
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Usage

### Employee Listing Page

- **View Employee Details**: Click on an employee name to view detailed information.
- **Delete Employee**: Click the delete button next to an employee's name to remove the employee from the system. *(Note: The delete function is currently not working due to an issue with the API.)*

### Add Employee Page

- Fill in the form with the employee's name, address, and contact methods.
- Click the "Add Employee" button to save the new employee to the system.

## Known Issues

- **Delete Function**: The delete functionality is currently not operational due to an issue with the API. Efforts were made to create the API manually from scratch, but the issue persists. As a result, the application is being submitted with the delete function not working.

## API Endpoints

The application interacts with the following API endpoints:

- **Create Employee**: `POST /api/employee`
- **List Employees**: `GET /api/employee`
- **Get Employee Details**: `GET /api/employee/{id}`
- **Delete Employee**: `DELETE /api/employee/{id}` *(Currently not working)*

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions or issues, please contact the repository owner. Thank you for using this React Employee Management App!

 
