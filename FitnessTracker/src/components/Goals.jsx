import React, { useState, useEffect } from "react";
import { instance } from "../activity/instance"

const Goals = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    const response = await instance.get("/api/goals/getallgoals");
    setGoals(response.data);
  };

  const addGoal = async () => {
    const newGoal = { title, description, targetDate };
    await instance.post("/api/goals", newGoal);
    fetchGoals();
    setTitle("");
    setDescription("");
    setTargetDate("");
  };

  const markAsAchieved = async (id) => {
    await instance.put(`/api/goals/${id}`);
    fetchGoals();
  };

  return (
    <div className="m-4 text-center">
      <h2 className="text-success">Goals</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        type="date"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
      />
      <button onClick={addGoal}>Add Goal</button>
      <div>
        <img
          src="https://i.pinimg.com/736x/45/de/66/45de667e77b3e8530b2f47c8c5e339b3.jpg"
          alt="Girl in a jacket"
          width="600"
          height="550"
        ></img>
      </div>

      <h3>Goal List</h3>
            <ul>
                {goals.map(goal => (
                    <li key={goal._id}>
                        <h4>{goal.title}</h4>
                        <p>{goal.description}</p>
                        <p>Target Date: {goal.targetDate}</p>
                        <p>Status: {goal.achieved ? 'Achieved' : 'Pending'}</p>
                        {!goal.achieved && <button onClick={() => markAsAchieved(goal._id)}>Mark as Achieved</button>}
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default Goals;
