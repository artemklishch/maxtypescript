"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.createEmploee = function (name) {
        return { name: name };
    };
    Department.fiscalYear = 2022;
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('It departnet' + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Departnetn id - ' + this.id);
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
var accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();
var employee1 = Department.createEmploee('Max');
console.log(employee1, Department.fiscalYear);
//# sourceMappingURL=app.js.map