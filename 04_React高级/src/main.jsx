import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './Components/01_Context深层传递参数/App'
// import App from './Components/02_使用Reducer和Context拓展你的应用/App'
// import App from './Components/03_ref的使用/01_ref的基本使用'
// import App from './Components/03_ref的使用/02_ref访问另一个组件的dom'
// import App from './Components/04_使用Effect/01_Effect的使用'
// import App from './Components/04_使用Effect/02_指定Effect依赖'
import App from './Components/04_使用Effect/03_在Effect中按需添加清理函数'

// <React.StrictMode>: 启用React严格模式, 帮助你在开发过程中尽早地发现组件中的常见错误。
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
