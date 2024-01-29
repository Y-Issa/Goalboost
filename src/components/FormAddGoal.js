import { useState } from "react";

export default function FormAddGoal({ onAddGoal }) {
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
