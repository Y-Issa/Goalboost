import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import GoalList from "./GoalList";
import FormAddGoal from "./FormAddGoal";

const goals_ = [
  {
    id: 18029,
    title: "Learn JavaScript",
    details: "Find a good course on udemy such as Jonas's course",
    deadline: "2024-2-2",
    done: false,
  },
  {
    id: 18030,
    title: "Learn React",
    details: "Find a good course on udemy such as Jonas's course",
    deadline: "2024-2-2",
    done: false,
  },
  {
    id: 18031,
    title: "Do your own projects",
    details: "Be creative in doing simple functional projects as a start",
    deadline: "2024-2-2",
    done: false,
  },
];

export default function App() {
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [goals, setGoals] = useState(goals_);
  function handleShowForm() {
    setShowAddGoal((show) => !show);
  }

  function handleDeleteGoal(goal) {
    setGoals(goals.filter((goal_) => goal_.id !== goal.id));
  }

  function handleClear() {
    const confirm = window.confirm("Are you sure you want to delete all goals");
    if (confirm) setGoals([]);
    setShowAddGoal(false);
  }

  function handleAddGoal(goalObject) {
    setGoals([...goals, goalObject]);
    setShowAddGoal(false);
  }

  function handleToggle(id) {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, done: !goal.done } : goal
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <GoalList
          goals={goals}
          onDeleteGoal={handleDeleteGoal}
          onToggle={handleToggle}
        />
        {showAddGoal && <FormAddGoal onAddGoal={handleAddGoal} />}
        <Button onClick={handleShowForm}>
          {showAddGoal ? "Close" : "Add a Goal"}
        </Button>
        <Button onClick={handleClear}>Clear</Button>
      </div>
    </div>
  );
}
