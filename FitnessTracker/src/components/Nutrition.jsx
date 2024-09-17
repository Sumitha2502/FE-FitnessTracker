import React, { useState, useEffect } from "react";
import { instance } from "../activity/instance";
// import axios from "axios"

const Nutrition = () => {
  const [date, setDate] = useState("");
  const [calories, setCalories] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [water, setWater] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const response = await instance.get("/nutrition/getallnutrition");
    setEntries(response.data);
    // const response = await axios.get("https://fitnesstracker-be.onrender.com/api/nutrition/getallnutrition");
    // const result=response.json()
    // setEntries(result.data);
  };

  const addEntry = async () => {
    const newEntry = { date, calories, carbs, protein, fat, water };
    await instance.post("/nutrition/api/nutrition", newEntry);
    fetchEntries();
    setDate("");
    setCalories("");
    setCarbs("");
    setProtein("");
    setFat("");
    setWater("");
  };

  return (
    <div className="m-4 text-center">
      <h2 className="text-success">Nutrition</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <input
        type="number"
        placeholder="Carbs (g)"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
      />
      <input
        type="number"
        placeholder="Protein (g)"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
      />
      <input
        type="number"
        placeholder="Fat (g)"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
      />
      <input
        type="number"
        placeholder="Water (L)"
        value={water}
        onChange={(e) => setWater(e.target.value)}
      />
      <button onClick={addEntry}>Add Entry</button>

      <img
        src="https://www.veganeasy.org/wp-content/uploads/2020/09/nutrition_chart_102-1.jpg"
        alt="Girl in a jacket"
        width="650"
        height="600"
      ></img>

      <h3>Entries</h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            {entry.date}: {entry.calories} kcal, {entry.carbs}g carbs,{" "}
            {entry.protein}g protein, {entry.fat}g fat, {entry.water}L water
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nutrition;
