import React, { useState } from "react";

function GoalForm(props) {
  const [dataForm, setDataForm] = useState({
    goal: "",
    by: "",
  });

  function handleInput(e) {
    console.log("input------->" + e.target.value);
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(dataForm);
    setDataForm({ goal: "", by: "" });
  }
  function deleteGoals() {}
  return (
    <>
      <h1>My little lemon goals: </h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="goal"
          name="goal"
          type="text"
          value={dataForm.goal}
          onChange={handleInput}
        ></input>
        <input
          placeholder="by...."
          type="text"
          name="by"
          onChange={handleInput}
          value={dataForm.by}
        ></input>
        <button>Submit</button>
        <button onClick={deleteGoals}>Delete all goals</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allgoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is {g.goal} by {g.by}
          </span>
        </li>
      ))}
      <li></li>
    </ul>
  );
}

export default function App() {
  const [allgoals, setAllGoals] = useState([]);
  function addGoal(goal) {
    setAllGoals([...allgoals, goal]);
  }
  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allgoals={allgoals} />
    </div>
  );
}
