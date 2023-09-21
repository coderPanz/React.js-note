import { useContext } from "react";
import { LevelContext } from "./LevelContext";

// Step2: 使用Context
// 从 React 中引入 useContext Hook 以及你刚刚创建的 context
export default function Heading({ children }) {
  // useContext 告诉 React Heading 组件想要读取 LevelContext。
  // 如果你不提供 context，React 会使用你创建出来的默认值。
  const level = useContext(LevelContext)
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("未知的level: ", level);
  }
}
