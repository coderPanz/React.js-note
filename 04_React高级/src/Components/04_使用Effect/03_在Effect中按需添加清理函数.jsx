import { useEffect } from 'react';

// 这个例子中，Effect 中的代码没有使用任何 props 或 state，此时指定依赖数组为空数组 []。这告诉 React 仅在组件“挂载”时运行此代码，即首次出现在屏幕上这一阶段。

// 在开发环境中： React会重复挂载你的组件一次, 也就是两次渲染。可以确保在 React 中离开和返回页面时不会导致代码运行出现问题。
// 在生产环境中：组件挂载一次

// 每次重新执行 Effect 之前，React 都会调用清理函数；组件被卸载时，也会调用清理函数。
export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>欢迎来到聊天室！</h1>;
}


export function createConnection() {
  // 真实的实现会将其连接到服务器，此处代码只是示例
  return {
    connect() {
      console.log('✅ 连接中……');
    },
    disconnect() {
      console.log('❌ 连接断开。');
    }
  };
}
