/**
 * POST handler
 *  */

const postUser = async (req, res) => {
    try {
        const { name, email, phone , adress , pseudo } = req.body
      // handling errors : email & name are required
        /* if (!email || !name) {
        res.status(400).send({ msg: 'Email and Name are required !!!' })
        return;
        } */

      // handling errors : test if user already exist with email
        const user = await User.findOne({ email })
        if (user) {
            res.status(400).send({ msg: 'User already exist ( email is unique ) !!!' })
        return;
    }

      // create and save the new user
    const newUser = new User({ name, email, phone , pseudo , adress  })
    await newUser.save()
        res.status(200).send({ msg: 'User added successfully ...', newUser })

    } catch (error) {
        res.status(500).send({ msg: "impossible to add new User", error })
    }
}


/**
 * GET all
 *  */
const getAllUsers = async (req, res) => {
    try {
        const listUsers = await User.find()
        res.status(200).send({ msg: 'This is the list of users ...', listUsers })
    } catch (error) {
        res.status(400).send({ msg: 'Can not get all users !!', error })
    }
    }


/**
 * GET one contact
 *  */
const getUser = async (req, res) => {
    try {
        const { _id } = req.params
        const userToFind = await User.findOne({ _id })
        console.log(userToFind)
        res.status(200).send({ msg: 'I find the user ...', userToFind })
    } catch (error) {
        res.status(400).send({ msg: 'Can not get user with this id !!', error })
    }
    }



/**
 * delete user
 *  */
const deleteUser = async (req, res) => {
    const { _id } = req.params
    try {
        const userToDelete = await User.findOneAndRemove({ _id })
      // console.log(UserToDelete)
        if (!userToDelete) {
            res.status(200).send({ msg: 'User already deleted ...' })
        return
        }
        res.status(200).send({ msg: 'User deleted ...', userToDelete })
    } catch (error) {
        res.status(400).send({ msg: 'Can not delete user with this id !!', error })
    }
}

/**
 * edit user
 *  */

const editUser = async (req, res) => {
    // const { name, email, phone } = req.body
    const { _id } = req.params
    try {
        const userToEdit = await User.updateOne({ _id }, { $set: { ...req.body } })
      // console.log(userToEdit)
        if (!userToEdit.nModified) {
        res.status(400).send({ msg: 'Contact already updated ..', userToEdit })
        return
        }
        res.status(200).send({ msg: 'User updated ..', userToEdit })
    } catch (error) {
        res.status(400).send({ msg: 'Can not edit user with this id !!', error })
    }
}


module.exports = {postUser,getAllUsers,getUser,deleteUser,editUser}