import chai from 'chai'
const expect = chai.expect

import Employee from '../src/employee.js'
import JuniorEmployee from '../src/junioremployee.js'
import MidLevelEmployee from '../src/midlevelemployee.js'
import SeniorLevelEmployee from '../src/seniorlevelemployee.js'


describe('Employee', () => {
    describe('employee class', () => {
        //This is a variable for the employee base class
        let employee

        beforeEach(() => {
            //initialize a new employee object before each test block executes
            employee = new Employee('Olusola', '07038019747', 1, 5000)
        })
      it('returns the name of the employee', () => {
        expect(employee.name).to.be.equal('Olusola')
      });

      it('returns the employee details', () => {
        expect(employee.getDetails()).to.be.equal('Olusola | 07038019747 | 1')
      });
      it('returns the mobile number of the employee', () => {
        expect(employee.mobile).to.be.equal('07038019747')
      });

      it('returns the level of the employee', () => {
        expect(employee.level).to.be.equal(1)
      });

      it('returns the rate at which the employee is paid', () => {
        expect(employee.rate).to.be.eql(5000)
      });

      it('returns invalid number when a wrong phone number is entered', () => {
        expect(employee.setMobile('08099456')).to.be.eql('Invalid number')
      });

      it('returns invalid level when the wrong level is entered', () => {
        expect(employee.setLevel('5')).to.be.eql('Invalid number')
      });
    });

    describe('JuniorEmployee', () => {
        //This is a variable for the employee base class
        let juniorEmployee

        beforeEach(() => {
            //initialize a new employee object before each test block executes
            juniorEmployee = new JuniorEmployee('Kunle', '08038019997', 1, 5000, 8)
        })
      it('returns the salary earned by Kunle', () => {
        expect(juniorEmployee.getSalary()).to.be.equal(`Salary: ${40000}`)
      });
      it('returns the hours worked by the employee', () => {
        expect(juniorEmployee.getHoursWorked()).to.be.equal(8)
      });
      it('returns incorrect time when the data type entered as the junior employee hours worked is not a number', () => {
        expect(juniorEmployee.setHoursWorked('4')).to.be.equal('Incorrect time')
      });
      it('sets the hours worked by the employee and returns the value', () => {
        expect(juniorEmployee.setHoursWorked(4)).to.be.equal(4)
      });
    })

    describe('MidLevelEmployee', () => {
        //This is a variable for the employee base class
        let midLevelEmployee

        beforeEach(() => {
            //initialize a new employee object before each test block executes
            midLevelEmployee = new MidLevelEmployee('Balogun', '07037777747', 2, 10000, 10, 5)
        })
        it('returns the details of the employee', () => {
            expect(midLevelEmployee.getDetails()).to.be.equal('Balogun | 07037777747 | 2')
        });
        it('sets the hours worked by the employee and returns the value', () => {
            expect(midLevelEmployee.setHoursWorked(20)).to.be.equal(20)
        });
        it('returns incorrect time when the data type entered as the midlevel employee hours worked is not a number', () => {
            expect(midLevelEmployee.setHoursWorked('4')).to.be.equal('Incorrect time')
        });
        it('returns the salary earned by the employee', () => {
          expect(midLevelEmployee.getSalary()).to.be.equal(250000)
        });
    })

    describe('SeniorEmployee', () => {
      //This is a variable for the employee base class
      let seniorEmployee

      beforeEach(() => {
          //initialize a new employee object before each test block executes
          seniorEmployee = new MidLevelEmployee('Bamidele', '08034385834', 3, 20000, 5, 5)
      })
      it('returns the details of the employee', () => {
          expect(seniorEmployee.getDetails()).to.be.equal('Bamidele | 08034385834 | 3')
      });
      it('sets the hours worked by the employee and returns the value', () => {
          expect(seniorEmployee.setHoursWorked(30)).to.be.equal(30)
      });
      it('returns incorrect time when the data type entered as the midlevel employee hours worked is not a number', () => {
          expect(seniorEmployee.setHoursWorked('8')).to.be.equal('Incorrect time')
      });
      it('returns the salary earned by the employee', () => {
       expect(seniorEmployee.getSalary()).to.be.equal(400000)
      });
  })
})




    