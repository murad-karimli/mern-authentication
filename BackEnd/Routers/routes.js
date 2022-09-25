const express=require("express");
const router=express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal}=require("./Controllers/goalsControllers")

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(setGoal).delete(deleteGoal)

module.exports=router;