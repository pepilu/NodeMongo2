//added express-async-handler
//no need to use try/catch
const asyncHandler = require("express-async-handler");

//adding async/await because mongoose is promise based

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    //Express built in error handler
    throw new Error("Please add a text field");
  }
  //console.log(req.body);
  res.status(200).json({ message: "Set goal" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
