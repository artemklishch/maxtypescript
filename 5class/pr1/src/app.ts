class Department {
    // private readonly id: string
    // private name: string
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.id = id
        // this.name = name
    }
    describe(this: Department) {  // this: Department - ничего здесь не добавляет
        console.log(`Department (${this.id}): ${this.name}`)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('d1', 'Accounring')
// console.log('first', accounting)
accounting.addEmployee("Max")
accounting.addEmployee("Bob")

// accounting.employees[2] = 'Anna'
// accounting.name = 'sdfgfgsdfg'

accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = { name: 'e', describe: accounting.describe }
// accountingCopy.describe()