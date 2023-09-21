import { LevelContext } from "./LevelContext"
import { useContext } from "react"

export default function Section({ children }) {
  // 把它们用 context provider 包裹起来  以提供 LevelContext 给它们
  // 优化: 在相同的组件中使用并提供context
  const level = useContext(LevelContext)
  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {/* 子组件会从离其最近的父组件的.Provider提供的value来取读相应的数据 */}
        {children}
      </LevelContext.Provider>
    </section>
  )
}