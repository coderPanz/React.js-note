// 编写 Effect 需要遵循以下三个规则
/**
 * 1. 声明 Effect。默认情况下，Effect 会在每次渲染后都会执行。
 * 2. 指定 Effect 依赖。大多数 Effect 应该按需执行，而不是在每次渲染后都执行。
 * 3. 必要时添加清理（cleanup）函数。有时 Effect 需要指定如何停止、撤销，或者清除它的效果。
 */

import { useEffect, useState, useRef } from "react";

function VideoPlayer({ src, isPlaying }) {
  // 不要试图在渲染期间对 DOM 节点进行操作。在 React 中，JSX 的渲染必须是纯粹操作
  // 一次调用 VideoPlayer 时，对应的 DOM 节点甚至还不存在！如果连 DOM 节点都没有，那么如何调用 play() 或 pause() 方法呢！

  //  解决方法: 使用 useEffect 包裹副作用，把它分离到渲染逻辑的计算过程之外
  // 把调用 DOM 方法的操作封装在 Effect 中，你可以让 React 先更新屏幕，确定相关 DOM 创建好了以后然后再运行 Effect。
  const videRef = useRef(null)

  useEffect(() => {
    if(isPlaying) {
      videRef.current.play()
    } else {
      videRef.current.pause()
    }
  })

  return (
    <video src={src} ref={videRef} loop playsInline></video>
  )
}

export default function App() {
  const [ isPlaying, setIsPlaying ] = useState(false)
  return (
    <>
      <button onClick={() => {
        setIsPlaying(!isPlaying)
      }}>
        {isPlaying ? '播放': '暂停'}
      </button>
      <VideoPlayer 
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  )
}

// 陷阱: 能看出一下代码执行后会出现什么问题嘛?
// const [count, setCount] = useState(0);
// useEffect(() => {
//   setCount(count + 1);
// });