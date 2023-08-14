import express, { Router } from "express";
import { Admin } from "../../db";
import { SECRET, authenticateJwt } from "../../middleware";
import jwt from "jsonwebtoken";
const router = express.Router();


interface UserSignupInputs{
    username: string;
    password: string;
}


router.post("/signup", async (req,res)=>{
    const {username, password}: UserSignupInputs = req.body;
    const admin = await Admin.findOne({username})

    if(admin){
        res.json({
            msg: "Admin already exist"
        });
    }else{
        const newAdmin = new Admin({username: username, password: password})
        await newAdmin.save()
        const token = jwt.sign({id: newAdmin._id, role:"admin"}, SECRET, {expiresIn: '1h'});
        res.json({
            msg: "Admin created successfully",
            token
    })
    }
    
    
})

router.post("/login",  async (req,res)=>{
    const {username, password}: UserSignupInputs = req.body;
    const admin = await Admin.findOne({username,password})

    if(admin){
        const token = jwt.sign({id: admin._id, role:"admin"}, SECRET, {expiresIn: '1h'});

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
    const adminId = req.headers["userId"]
    const admin = await Admin.findOne({_id: adminId})
    if(admin){
        res.json({
            username: admin.username
        })
    }else{
        res.status(403).json({
            msg: "user not loged in"
        })
    }
})

export default router;