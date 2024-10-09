const express = require("express")
const router = express.Router()
// const Projects = require('../models/ProjectModel')
const projects = require("../models/ProjectModel")
router.get('/all', async ( req,res) => {
    try {
        const fetchProjects = await projects.find()
        res.status(200).json(fetchProjects)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/add', async (req,res) => {
    try {
        const newprojectdata = await new projects(req.body)
        const {title, desc} = newprojectdata
        if (!title || !desc) {
            res.status(500).json({ message: "Title & Desc requied" })
        }
        const savedata = await newprojectdata.save()
        res.status(200).json(savedata)
    } catch (error) {
        res.status(500).json(error)

    }
})

router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const currectrecord=await projects.findOne({_id: id})
        if(!currectrecord){
            res.status(404).json({ message:"Project is not found"})
        }
        const updateProject =await projects.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateProject)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const deleteRecord=await projects.findOne({_id:id})
        if(!deleteRecord){

            res.status(404).json({message:"Project is not found"})
        }
        const deleterecord=await projects.findByIdAndDelete(id)
        res.status(200).json(deleterecord)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router