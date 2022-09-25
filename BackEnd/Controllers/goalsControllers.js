const getGoals=(req,res)=>{
    res.status(200).json({message:"get request"})
};

const setGoal=(req,res)=>{
    res.status(200).json({message:"post request"})
}

const updateGoal=(req,res)=>{
    res.status(200).json({message: `put request to ${req.params.id}`})
}

const deleteGoal=(req,res)=>{
    res.status(200).json({message:`delete request to ${req.params.id}`})
}
module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}