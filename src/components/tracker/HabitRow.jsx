import CheckboxCell from './CheckboxCell';

export default function HabitRow({ habit, days, toggleCheck }) {
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const displayedGoal = habit.dynamicGoal ? daysInMonth : habit.goal;

  const achieved = days.filter((d) => habit.tracking[d]).length;

  return (
    <div className="flex border-b items-center py-3">
      <div className="w-32">{habit.name}</div>
      {days.map((d) => (
        <CheckboxCell key={d} isChecked={habit.tracking[d]} onClick={() => toggleCheck(habit.id, d)} />
      ))}
      <div className="w-16 text-center">{achieved}</div>
      <div className="w-16 text-center">{displayedGoal}</div>
    </div>
  );
}