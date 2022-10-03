const db = require('../config/db.manager');

exports.getAllCutstomers = function (req, res) {
    const salesCustomer = db.getSalesCustomers().then(results=>{
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0] 
        }); // send all the data
});
}

exports.getCustomersByID = function( req, res){
    const {id} = req.params; // get id
    res.status(200).json({
        status: 'no implemented'
    });
}

//createNewSales
exports.createNewCustomers = function( req, res){ // must select the body to be raw -> JSON in Postman
    const {body} = req;// req.body (attribute) 
    const {id} = req.params;// get (attribute) 
    res.status(200).json({
        status: 'no implemented'
    });
}

//patchSalesById
exports.patchCustomersById = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id (attribute)
    res.status(200).json({
      status: 'no implemented'
  });
}

//deleteSalesByID
exports.deleteCustomersByID = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute) 
    const {id} = req.params;// get id 
    res.status(200).json({
    status: 'no implemented'
    });
}