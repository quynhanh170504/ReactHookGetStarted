/**
 * @functionList
 * handleAddNewUser
 * handleDeleteUser
 * handleDeleteAllUser
 */

import React, {useState} from 'react'
import DisplayInfor from './DisplayInfor'
import AddUserInfo from './AddUserInfo'
import SliderAutoplay from './SliderAutoplay'
import './MyComponent.css'

const MyComponent = () => {

  const [listUsers, setListUsers] = useState([
    {id: 1, name: 'Quynh Anh', age: 20},
    {id: 2, name: 'Arya', age: 17},
    {id: 3, name: 'Masachika', age: 17}
  ])

  const handleAddNewUser = (userObj) => {
    setListUsers([...listUsers, userObj])
  }

  const handleDeleteUser = (userId) => {
    let listUserClone = listUsers
    listUserClone = listUserClone.filter(item => item.id !== userId)
    setListUsers(listUserClone)
  }

  const handleDeleteAllUser = () => {
    setListUsers([])
  }

  return (
    <>
      <div className='MyComponent-container'>
        <div>
          <AddUserInfo 
            listUsers={listUsers}
            handleAddNewUser={handleAddNewUser}
          ></AddUserInfo>
        </div>
        <div>
          <SliderAutoplay/>
        </div>    
      </div>
      <div>
        <DisplayInfor 
          listUsers={listUsers} 
          handleDeleteUser={handleDeleteUser} 
          handleDeleteAllUser={handleDeleteAllUser}
        />
      </div>
    </>
  )
}

export default MyComponent
