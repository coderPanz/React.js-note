import { useState, useRef, useEffect } from 'react';

// Effect 会在每次渲染时执行。但更多时候，并不需要每次渲染的时候都执行 Effect。
// 有时这会拖慢运行速度, 在非必要时可能希望跳过它。
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('调用 video.play()');
      ref.current.play();
    } else {
      console.log('调用 video.pause()');
      ref.current.pause();
    }
  }, [isPlaying]); // 如果 isPlaying 在上一次渲染时与当前的值相同，它应该跳过重新运行 Effect。

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
