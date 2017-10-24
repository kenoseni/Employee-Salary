// Employee's base class where junior,midlevel and senior employees extends
class Employee{
    constructor(name, mobile, level, rate){
  
          this.name= name
          this.mobile= mobile
          this.level= level
          this.rate = rate
    
    }
    getDetails(){
       //returns employee's detail//
       return `${this.name} | ${this.mobile} | ${this.level}`
    }
  
    level(){
        return this.level; //returns level//
    }
  
    rate(){
        return `${this.rate} per hour`; //returns rate//
    }

    //sets mobile number
    setMobile(mobile){
        if(mobile.length===11){
            return this.mobile= mobile;
        }
        return 'Invalid number'
    }

    getMobile(){
        return this.mobile; //returns mobile number//
    }
    
    
    getName(){
         return this.name;
    }
  
    setName(name){
        return this.name = name;
    }

    setLevel(level){
        if(typeof(level)!== Number || this.level > 3){
            return 'Invalid number'
        }
        return this.level = level 
    }
  
  
}

export default Employee;
  