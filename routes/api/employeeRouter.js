const express = require('express')
const employeeRouter = express.Router()
const { getAllEmployees, getEmployee, updateEmployee, createEmployee, deleteEmployee} = require('../../controllers/empController')


employeeRouter.route('/')
    .get(getAllEmployees)
    .put(updateEmployee)  
    .post(createEmployee)
    .delete(deleteEmployee)

employeeRouter.route('/:id')
    .get(getEmployee)

module.exports = employeeRouter