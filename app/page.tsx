'use client';
import { useState } from "react";
import { Slider } from "@mui/material";

export default function TDEECalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [age, setAge] = useState(25);
  const [activity, setActivity] = useState(1.375);
  const [gender, setGender] = useState("male");

  const calculateTDEE = () => {
    const S = gender === "male" ? 5 : -161;
    const BMR = 10 * weight + 6.25 * height - 5 * age + S;
    return (BMR * activity).toFixed(2);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg w-96 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">TDEE Calculator</h2>
        <p className="text-center text-gray-700 mb-4">Estimate your daily calorie needs</p>

        {/* Weight Input + Slider */}
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold">Weight (kg)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-400 rounded-md text-center text-gray-900"
            value={weight}
            min={30}
            max={150}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <Slider value={weight} min={30} max={150} onChange={(e, v) => setWeight(v as number)} />
        </div>

        {/* Height Input + Slider */}
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold">Height (cm)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-400 rounded-md text-center text-gray-900"
            value={height}
            min={100}
            max={220}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          <Slider value={height} min={100} max={220} onChange={(e, v) => setHeight(v as number)} />
        </div>

        {/* Age Input + Slider */}
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold">Age</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-400 rounded-md text-center text-gray-900"
            value={age}
            min={10}
            max={80}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <Slider value={age} min={10} max={80} onChange={(e, v) => setAge(v as number)} />
        </div>

        {/* Activity Level */}
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold">Activity Level</label>
          <select className="w-full p-2 border border-gray-400 rounded-md text-gray-900" value={activity} onChange={(e) => setActivity(Number(e.target.value))}>
            <option value={1.2}>No Activity</option>
            <option value={1.375}>Light Exercise</option>
            <option value={1.55}>Moderate Exercise</option>
            <option value={1.725}>Active</option>
            <option value={1.9}>Very Active</option>
          </select>
        </div>

        {/* Gender Selection */}
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold">Gender</label>
          <select className="w-full p-2 border border-gray-400 rounded-md text-gray-900" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* TDEE Result */}
        <div className="mt-4 p-4 bg-blue-200 text-center rounded-md shadow-md">
          <h3 className="text-xl font-bold text-blue-800">Estimated TDEE</h3>
          <p className="text-2xl font-bold text-blue-700">{calculateTDEE()} kcal/day</p>
        </div>
      </div>
    </div>
  );
}
