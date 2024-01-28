import { useState } from "react";

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

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

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

function Header() {
  return (
    <div className="header">
      <h1>GoalBoost</h1>
    </div>
  );
}

function GoalList({ goals, onDeleteGoal, onToggle }) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <div key={goal.id} className={goal.done ? "done" : ""}>
            <input
              type="checkbox"
              value={goal.done}
              onChange={() => onToggle(goal.id)}
            />
            <Goal
              goal={goal.title}
              details={goal.details}
              deadline={goal.deadline}
              done={goal.done}
            />
            <Button onClick={() => onDeleteGoal(goal)}>Delete</Button>
          </div>
        );
      })}
    </ul>
  );
}

function Goal({ goal, details, deadline, done }) {
  return (
    <li>
      <h3>{goal}</h3>
      <p>{done ? "This task is completed!" : details}</p>
      <p className="deadline">
        Deadline:{" "}
        {new Date(deadline).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          weekday: "short",
          day: "numeric",
        })}
      </p>
    </li>
  );
}

function FormAddGoal({ onAddGoal }) {
  const [goal, setGoal] = useState("");
  const [detail, setDetail] = useState("");
  const [deadlineDay, setDeadlineDay] = useState("");
  const goalObject = {
    title: goal,
    details: detail,
    id: crypto.randomUUID(),
    deadline: deadlineDay,
    done: false,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!goal || !deadlineDay) {
      alert("Please fill the required data");
      return;
    }

    onAddGoal(goalObject);
    setGoal("");
    setDetail("");
  }
  return (
    // <div className="add-goal">
    <form onSubmit={handleSubmit}>
      <label>Goal:</label>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <label>Details:</label>
      <input
        type="text"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <label>Set Deadline</label>
      <input
        type="date"
        value={deadlineDay}
        onChange={(e) => setDeadlineDay(e.target.value)}
      />
      <button>Confirm</button>
    </form>
    // </div>
  );
}
