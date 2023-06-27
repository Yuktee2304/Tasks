// Define the JSON data
const employeeData = {
  "employee": {
    "name": "sonoo",
    "salary": 56000,
    "married": true
  }
};

// Using a for loop
for (let key in employeeData.employee) {
  console.log(key + ": " + employeeData.employee[key]);
}

// Using a for...in loop
for (let key in employeeData.employee) {
  if (employeeData.employee.hasOwnProperty(key)) {
    console.log(key + ": " + employeeData.employee[key]);
  }
}

// Using a for...of loop
const employeeArray = Object.entries(employeeData.employee);
for (let [key, value] of employeeArray) {
  console.log(key + ": " + value);
}

// Using a forEach loop
Object.entries(employeeData.employee).forEach(([key, value]) => {
  console.log(key + ": " + value);
});