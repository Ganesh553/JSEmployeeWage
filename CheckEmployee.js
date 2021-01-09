class Utility{
    checkEmployee(){
        var EmployeePresent = 0;
        var EmployeeAbsent = 1;
        let Employee = Math.floor(Math.random() * 2);
        if(Employee == EmployeePresent)
            return "Employee is Present";
        else
            return "Employee is Absent";
    }
}
let ref = new Utility();
const employee = ref.checkEmployee();
console.log(employee)
