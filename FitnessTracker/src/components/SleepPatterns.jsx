import React, { useState, useEffect } from "react";
import {instance}  from '/src/activity/instance'

const SleepPatterns = () => {
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [quality, setQuality] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const response = await instance.get("/api/sleep/getallsleep");
    setEntries(response.data);
  };

  const addEntry = async () => {
    const newEntry = { date, duration, quality };
    await instance.post("/api/sleep", newEntry);
    fetchEntries();
    setDate("");
    setDuration("");
    setQuality("");
  };

  return (
    <div className="m-4 text-center">
      <h2 className="text-success">Sleep Patterns</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (hours)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <select value={quality} onChange={(e) => setQuality(e.target.value)}>
        <option value="">Select Quality</option>
        <option value="Good">Good</option>
        <option value="Average">Average</option>
        <option value="Poor">Poor</option>
      </select>
      <button onClick={addEntry}>Add Entry</button>
      <div>
        <img
          src="https://i.pinimg.com/736x/72/0c/97/720c97243b1fb41211e79b3618a1cee4.jpg"
          alt="Girl in a jacket"
          width="650"
          height="600"
        ></img>
      </div>

      <h3>Entries</h3>
            <ul>
                {entries.map(entry => (
                    <li key={entry._id}>
                        {entry.date}: {entry.duration} hours, {entry.quality} quality
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default SleepPatterns;
