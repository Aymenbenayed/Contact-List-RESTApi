// require express
const express = require('express')

// require Router
const router = express.Router()

// require model contact
const Contact = require('../models/Contact')

// require controllers
const { postContact,
    getAllContacts,
    getContact,
    deleteContact,
    editContact
} = require('../controllers/contactcontroller')

const {addingValidation, validation} =require  ('../middlewares/validators/contact')



// ************** All routes **********************

/**
 * @desc : test route
 * @method : GET
 * @path : http://localhost:7000/api/contacts/test
 * @data : nothing
 * @acess : public
 */
router.get('/test', (req, res) => {
    res.status(200).send('Hello test')
})


/**
 * @desc : add Contact
 * @method : POST
 * @path : http://localhost:7000/api/contacts
 * @data : req.body
 * @acess : public
 */
router.post('/', addingValidation(),validation ,postContact)


/**
 * @desc : get all Contacts
 * @method : GET
 * @path : http://localhost:7000/api/Contacts
 * @data : no data
 * @acess : public
 */
router.get('/', getAllContacts)

/**
 * @desc : get one Contact
 * @method : GET
 * @path : http://localhost:7000/api/Contacts/:_id
 * @data : req.params
 * @acess : public
 */
router.get('/:_id', getContact)

/**
 * @desc : delete Contact
 * @method : DELETE
 * @path : http://localhost:7000/api/Contacts/:_id
 * @data : req.params
 * @acess : public
 */

router.delete('/:_id', deleteContact)


/**
 * @desc : edit Contact
 * @method : PUT
 * @path : http://localhost:7000/api/Contacts/:_id
 * @data : req.params & req.body
 * @acess : public
 */
router.put('/:_id', editContact)


module.exports = router