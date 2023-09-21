import {  useTasksDispatch } from "./TaskReducer";

// 使用自己定义Hook
export default function AddTask({ onAddTask }) {
  const dispatch = useTasksDispatch()
  let nextId = 3;
  return (
    <div>
      <input type="text" id="taskInput" />
      <button
        onClick={() => {
          let text = document.getElementById("taskInput").value;
          dispatch({
            type: "add",
            text: text,
            id: nextId++,
          })
        }}
      >
        添加
      </button>
    </div>
  );
}
