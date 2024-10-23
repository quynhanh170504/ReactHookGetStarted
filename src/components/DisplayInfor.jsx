import React, {useEffect, useState} from 'react'
import './DisplayInfor.css'
export default function DisplayInfor({listUsers,handleDeleteUser , handleDeleteAllUser}) {

  const [isShowHideListUser, setIsShowHideListUser] = useState(true)
  const handleShowHideListUser = () => setIsShowHideListUser(!isShowHideListUser)

  const onClickDelete = (userId) => {
    handleDeleteUser(userId)
  }
  // useEffect = componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('call me useEffect')
  }, [listUsers])
  
  console.log('call me render')
  

  return (
    <div className='DisplayInfor-container'>
      <button onClick={() => {handleShowHideListUser()}}>
        {isShowHideListUser === false ? 'Show list users' : 'Hide list user'}
      </button>
      <button onClick={() => {handleDeleteAllUser()}}>Delete all users</button>
      <div className='list-container'>
      {
        isShowHideListUser && 
          listUsers.map((item, index) => {
            return (
              <div className='listStyle' key={index + 1}>
                <div className='childListStyle childListStyle-content'>
                  {item.id} - {item.name} - {item.age} 
                </div>
                <div className='childListStyle childListStyle-btn'>
                  <button onClick={() => {onClickDelete(item.id)}}>Delete</button>
                </div>
              </div>
            )    
          })
      }
      </div>
    </div>
  )
}