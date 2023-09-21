import AddList from "./AddList";
import AddTask from "./AddTask";
import TasksProvider from "./TaskReducer";
export default function TaskApp() {
  return (
    <>
      <TasksProvider>
        <h1>布达拉宫行乘安排</h1>
        <AddTask />
        <AddList />
      </TasksProvider>
    </>
  );
}
