import { forwardRef, useRef } from 'react';

// 默认情况下，组件不暴露其 DOM 节点。 您可以通过使用 forwardRef 并将第二个 ref 参数传递给特定节点来暴露 DOM 节点。
// 修改后: 传入ref并绑定
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        聚焦输入框
      </button>
    </>
  );
}
