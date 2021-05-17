import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'
import configureStore from './store/configureStore'
import { startGetUser } from './actions/userAction'
import { startSetStudents } from './actions/studentAction'
import { startSetStaffs } from './actions/staffAction'
import { startSetRooms } from './actions/roomAction'
const store=configureStore()
// console.log(store.getState())

store.subscribe(()=>{
    // console.log(store.getState())
})

if(localStorage.getItem('authToken'))
  {
    store.dispatch(startGetUser())
    store.dispatch(startSetStudents())
    store.dispatch(startSetStaffs())
    store.dispatch(startSetRooms())
    
  }

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))