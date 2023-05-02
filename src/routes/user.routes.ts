import {Router} from 'express'
import {createUser, getAllUsers,updateUser, deleteUser, getUser} from '../controllers/user.controllers'

const router= Router()

//Here routes you want 
router.post('/users', createUser)
router.get('/users', getAllUsers)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/users/:id', getUser)
export default router
