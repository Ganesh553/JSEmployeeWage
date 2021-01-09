class WageMonth{
    monthlyWage(){
        var Full_Time = 1;
        var Part_Time = 2;
        var Emp_Rate_Per_Hr = 20;
        var emp_Hr = 0;
        var Number_OF_Working_Hr = 20;
        var Total_Employee_Wage = 0;
        for (var Day=0;Day<=Number_OF_Working_Hr;Day++){
            let Employee = Math.floor(Math.random() * 3);
            switch(Employee){
                case Full_Time:
                    emp_Hr=8;
                    break;
                case Part_Time:
                    emp_Hr=8;
                    break;
                default:
                    emp_Hr=0;
                    console.log("Employee Is Absent");
                    break;
            }
            var Employee_Wage = Emp_Rate_Per_Hr * emp_Hr;
            Total_Employee_Wage = Total_Employee_Wage+Employee_Wage; 
        }
        console.log(Employee_Wage)
        console.log(Total_Employee_Wage)
    }
}
let ref = new WageMonth();
ref.monthlyWage();