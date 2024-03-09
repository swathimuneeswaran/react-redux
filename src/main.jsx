import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/CartContext.jsx';
import { store } from './app/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Provider store={store}>
    <UserProvider>
      <App />
    </UserProvider>
    </Provider>
  </React.StrictMode>,
)
