const Goal=require("../models/goalModel")

const getGoals= async(req,res)=>{ 
    const goals=await Goal.find()
    res.status(200).json(goals)
};

const setGoal= async(req,res)=>{
    const setNewGoal=Goal.create(
        {
            text:req.body.text
        }
    )
    res.status(200).json({message:"New goal added"})
}

const updateGoal= async(req,res)=>{
    const goal=Goal.findById(req.params.id)
if(!goal)
{
    res.status(400);
    throw new error
}
    const uptated=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(uptated)
}

const deleteGoal= async(req,res)=>{
    const goal=Goal.findById(req.params.id)
    if(!goal)
    {
        res.status(400);
        throw new error
    }

    await Goal.findByIdAndRemove(req.params.id, req.body)
    res.status(200).json({message:` Element with ${req.params.id} id is deleted`})
}
module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}