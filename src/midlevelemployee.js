import Employee from '../src/employee.js'
class MidLevelEmployee extends Employee{
    
    constructor(name, mobile, level, rate, hoursWorked, overTime){
        super(name, mobile, level, rate);
        //includes a new instant variable for time which is the amount of time the employee worked//
        this.hoursWorked = hoursWorked 
        //set maximum overtime in hours
        this.overTime = overTime
    }

    getSalary(){

        if (this.overTime > 40) {
            return this.level * this.rate * this.hoursWorked + this.rate * 40
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

export default MidLevelEmployee
