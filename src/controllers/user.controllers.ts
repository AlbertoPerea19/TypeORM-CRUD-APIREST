import {Request,Response} from 'express'
import {User} from '../entities/User'

export const createUser= async (req: Request, res: Response) => {
   try {
      const {firstname, lastname} = req.body;
      const user= new User();
      user.firstname=firstname;
      user.lastname=lastname;

      await user.save();
      return res.json(user);
   
   } catch (error) {
      if (error instanceof Error) {
         return res.status(500).json({message: error.message})
      }
   }
}

export const getAllUsers= async (req: Request, res: Response) => {
   try {
      const users= await User.find();
      return res.json(users);
   
   } catch (error) {
      if (error instanceof Error) {
         return res.status(500).json({message: error.message})
      }
   }
}

export const updateUser= async (req: Request, res: Response) => {
   try {
      const user= await User.findOneBy({id: parseInt(req.params.id)});
      const {firstname, lastname} = req.body;
      if (!user) {
         return res.status(404).json({message: 'User not found'})
      }
      user.firstname=firstname;
      user.lastname=lastname;

      await user.save();
      return res.json("user updated");
      
   
   } catch (error) {
      if (error instanceof Error) {
         return res.status(500).json({message: error.message})
      }
   }
}

export const deleteUser= async (req: Request, res: Response) => {
   try {
      const user= await User.findOneBy({id: parseInt(req.params.id)});
      if (!user) {
         return res.status(404).json({message: 'User not found'})
      }
      await user.remove();
      return res.json("user deleted");
      
   
   } catch (error) {
      if (error instanceof Error) {
         return res.status(500).json({message: error.message})
      }
   }
}

export const getUser= async (req: Request, res: Response) => {
   try {
      const {id} = req.params;
      const user= await User.findOneBy({id: parseInt(id)});
      if (!user) {
         return res.status(404).json({message: 'User not found'})
      }
      return res.json(user);
   
   } catch (error) {
      if (error instanceof Error) {
         return res.status(500).json({message: error.message})
      }
   }
}