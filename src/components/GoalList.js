import Button from "./Button";
import Goal from "./Goal";

export default function GoalList({ goals, onDeleteGoal, onToggle }) {
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
