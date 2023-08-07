import express from "express";
import {User} from "../../db/index"
import { SECRET, authenticateJwt } from "../../middleware/index";
import jwt from "jsonwebtoken";
const router = express.Router();

interface UserSignupInputs{
    username: string;
    password: string;
}

router.post("/signup", async (req,res)=>{
    const {username, password}: UserSignupInputs = req.body;
    const user = await User.findOne({username})

    if(user){
        res.json({
            msg: "User already exist"
        });
    }else{
        const newUser = new User({username: username, password: password})
        await newUser.save()
        const token = jwt.sign({id: newUser._id, role:"user"}, SECRET, {expiresIn: '1h'});
        res.json({
            msg: "User created successfully",
            token
    })
    }
    
    
})

router.post("/login",  async (req,res)=>{
    const {username, password}: UserSignupInputs = req.body;
    const user = await User.findOne({username,password})

    if(user){
        const token = jwt.sign({id: user._id, role:"user"}, SECRET, {expiresIn: '1h'});

        res.json({
            msg: "login success",
            token
        });
    }else{
        
        res.json({
            msg: "invalid credentials"
    })
    }
})

router.get("/me", authenticateJwt, async (req,res)=>{
    const userId = req.headers["userId"]
    const user = await User.findOne({_id: userId})
    if(user){
        res.json({
            username: user.username
        })
    }else{
        res.status(403).json({
            msg: "user not loged in"
        })
    }
})

export default router;