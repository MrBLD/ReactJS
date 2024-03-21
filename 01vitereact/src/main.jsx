import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    < div >
      <h1>Custom App</h1>
    </div >
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href: "https:/google.com",
//       target:'_blank'
//   },
//   children:'Click me to visit Google'
// }

const anotherElement=(
<a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"


const reactElement = React.createElement( //injected by babble compiler
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google ',
  anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <ReactElement/> //reactelement is a js not a jsx(js object with html tag to parse into js) not a prerendered js object
  // ReactElement // not work as render(react) method requires a specific input syntax
  
  reactElement
  // <MyApp />
  // MyApp()
  // anotherElement
  // <App />
  // </React.StrictMode>,
)
