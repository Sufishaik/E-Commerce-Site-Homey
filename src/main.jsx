// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {Provider} from "react-redux"
// import { Store } from './context/Store.tsx'
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// const queryClient = new QueryClient()

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <Provider store={Store}>
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>
//   </Provider>
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from './Store';


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
   <App />
   <ToastContainer position="top-center" />
 </Provider>


)



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { Provider } from "react-redux"
// import './index.css'
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import Store from './context/Store.js'

// const queryClient = new QueryClient()
// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>

//   <QueryClientProvider client={queryClient}>
//     <ReactQueryDevtools initialIsOpen={false} />
//        <Provider store={Store}>

//      <App />
//    </Provider>
//   </QueryClientProvider>

//   // </React.StrictMode>,
// )


