// reducer结合context的使用
import { useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";

// Step1: 创建context, 分别创建tasks和dispatch的context
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

// 自定义Hook
export function useTasks() {
  return useContext(TasksContext)
}
export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

export default function TasksProvider({ children }) {
  // dispatch 函数（用来 “派发” 用户操作给 reducer）
  // React 会将状态设置为你从 reducer 返回的状态。
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    // Step2: 将 state 和 dispatch 函数 放入 context, 一遍提供tasks和dispatch给整个组件树
    // 也可以同时使用props和context的方式传输数据, 但当通过context传递时就可以不需要通过prop
    // 的方式传递状态和事件处理函数
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: true,
        },
      ];
    }
    case "change": {
      return tasks.map((item) => {
        if (item.id === action.id) {
          return { ...item, done: !action.isEdit, text: action.text };
        } else {
          return item;
        }
      });
    }
    case "delete": {
      return tasks.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("未知 action: " + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: true },
  { id: 2, text: "Drink matcha", done: true },
];
