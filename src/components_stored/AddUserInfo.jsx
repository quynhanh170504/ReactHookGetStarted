/**
 * @functionList
 * handleChangeName
 * handleChangeAge
 * handleOnSubmit
 */

import React, { useState } from 'react'
import './AddUserInfo.css'

const AddUserInfo = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const [isValidName, setIsValidName] = useState(true)
  /**
   * @author Quynh Anh 
   * @param {} event 
   * @return ...
   */
  const handleChangeName = (event) => {
    setName(event.target.value)
    let characterChecked = '!'
    if(name.includes(characterChecked)) setIsValidName(false)
    else setIsValidName(true)
  }
  const handleChangeAge = (event) => {
    setAge(event.target.value)
  }
  const handleOnSubmit = () => {
    if(name === '' || age === '') return //empty input => do nothing
    props.handleAddNewUser({
      id: props.listUsers.length + 1,
      name: name,
      age: age
    })
    setName('')
    setAge('')
  }
  
  const inputStyle = {
    borderRadius: 10,
    padding: 10
  }

  const buttonStyle = {
    border: '1px solid blue',
    borderRadius: 10,
    padding: 10,
    width: 120,

  }  

  return (
    <div style={{margin: "100px"}}>
      <div className='spinner-box'>
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <fieldset style={{width: '230px',height: '200px', borderRadius: 10, backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/022/575/456/small_2x/chamomile-flower-field-camomile-in-the-nature-field-of-camomiles-at-sunny-day-at-nature-camomile-daisy-flowers-in-summer-day-chamomile-flowers-field-wide-background-in-sun-light-generative-ai-photo.jpg')"}}>
        <legend style={{border:'1px solid black', borderRadius: 10, padding: 10, fontWeight: 'bold', backgroundImage: "url('https://asset.gecdesigns.com/img/background-templates/dark-blue-background-with-the-diamond-pattern-template-sr06012408-1704699724568-cover.webp')", color: 'white'}}>Add a new user</legend>
        <table>
          <tbody>
          <tr>
            <td colSpan={2}>
              <div className="input-container">
                <input
                  className="input"
                  name="text"
                  type="text"
                  placeholder="Name..."
                  value={name}
                  onChange={(event) => handleChangeName(event)}
                />
              </div>
            </td>
          </tr>
          {/* <tr>
            <td><label style={{color: 'white'}}>Age</label></td>
            <td>
              <input type='text' value={age} style={inputStyle} 
                onChange={(event) => handleChangeAge(event)}></input>
            </td>
          </tr> */}
          <tr>
            <td colSpan={2}>
              <div className="input-container">
                <input
                  className="input"
                  name="text"
                  type="text"
                  placeholder="Age..."
                  value={age}
                  onChange={(event) => handleChangeAge(event)}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button alt="Add" className='btn-add' onClick={() => handleOnSubmit()}>
                <i>A</i>
                <i>d</i>
                <i>d</i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  )
}
export default AddUserInfo