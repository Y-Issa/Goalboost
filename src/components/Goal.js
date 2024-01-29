export default function Goal({ goal, details, deadline, done }) {
  const deadlineDay = new Date(deadline);
  const today = new Date();
  return (
    <li>
      <h3>{goal}</h3>
      <p>{done ? "This task is completed!" : details}</p>
      <p className="deadline">
        Deadline:{" "}
        {today.getTime() < deadlineDay.getTime()
          ? deadlineDay.toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              weekday: "short",
              day: "numeric",
            })
          : "DEADLINE PASSED!"}
      </p>
    </li>
  );
}
