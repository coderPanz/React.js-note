// 你希望组件“记住”某些信息，但又不想让这些信息 触发新的渲染 时，你可以使用 ref 。
// ref 最常见的用法是访问 DOM 元素

import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null)

  // 事件处理函数
  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <>
      <input type="text" ref={inputRef} /> 
      <button onClick={handleClick}>点击聚焦</button>
    </>
  )
}