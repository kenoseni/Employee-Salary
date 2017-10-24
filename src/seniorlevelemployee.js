import Employee from '../src/employee.js'
class SeniorEmployee extends Employee{
    
    constructor(name, mobile, level, rate, hoursWorked, overTime){
        super(name, mobile, level, rate);
        //includes a new instant variable for time which is the amount of time the employee worked//
        this.hoursWorked = hoursWorked // hours worked is
        //set maximum overtime in hours
        this.overTime = overTime
    }

    getSalary(){
        if (this.overTime > 60) {
            return this.level * this.rate * this.hoursWorked + this.rate * 60
        } else {
            return this.level * this.rate * this.hoursWorked + this.rate * this.overTime
        }
        
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

export default SeniorEmployee
