import React from 'react'
import './Comment.css'
const Comment = () => {
  return (
    <div className='comment-section'>
        <h4>LEAVE A REPLY</h4>
            <form>
              <textarea required placeholder='Comment:*......' /><br />
              <input type='text' required placeholder='Name:*' /><br />
              <input type='email' required placeholder='Email:*' /><br />
              <input type='url' placeholder='Website:' /><br />
              <div className='checkbox-class'>
                <input type="checkbox" />
                <p className='agree-text'> Save my name, email, and website in this browser for the next time I comment.</p>
              </div>
              
            </form>
            <button type="submit">SUBMIT</button>
          </div>
     
  )
}

export default Comment