import Employee from '../src/employee.js'
class JuniorEmployee extends Employee{
    
    constructor(name, mobile, level, rate, hoursWorked){
        super(name, mobile, level, rate);
        //includes a new instant variable for time which is the amount of time the employee worked//
        this.hoursWorked = hoursWorked // amount of time worked, with no overtime required
    }

    getSalary(){
        //calculates the salary by multiplying the level, the rate at that level and the time the employee worked
       
        return `Salary: ${this.level * this.rate * this.hoursWorked}`
    }

    getDetails(){
        //Details of junior employee
        return `${super.getDetails()}`
    }

    getHoursWorked(){
        
        // total time the employee worked
        return this.hoursWorked 
    }

    setHoursWorked(value){
        if(typeof(value)!='number'){
            return 'Incorrect time'
        }
        return this.hoursWorked = value 

    }
}

export default JuniorEmployee
