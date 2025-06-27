import { useState } from 'react';

export default function AddHabitForm({ onAdd }) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');

  const handleAdd = () => {
    if (!name) return;

    const now = new Date();
    const maxDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const parsedGoal = parseInt(goal) || 0;
    const sanitizedGoal = Math.min(parsedGoal, maxDays);
    const isMaxGoal = parsedGoal >= maxDays;

    if (parsedGoal > maxDays) {
      alert(`This month has only ${maxDays} days. Goal adjusted to ${sanitizedGoal}.`);
    }

    onAdd(name, sanitizedGoal, isMaxGoal);
    setName('');
    setGoal('');
  };

  return (
    <div className="flex items-center mt-4 gap-2">
      <input
        className="border p-2"
        placeholder="New Habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="border p-2 w-24"
        placeholder="Goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        min="1"
      />
      <button
        className="bg-blue-500 text-white p-2"
        onClick={handleAdd}
      >
        + New Habit
      </button>
    </div>
  );
}