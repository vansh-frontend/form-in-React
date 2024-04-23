import React from 'react';
import './App.css'; 


function App() {
  return (
    <>
      <div className="form">
        <label htmlFor="name">name</label>
        <input type="text" placeholder='username or email' />

        <label htmlFor="password">password</label>
        <input type="password" placeholder='password' />

        <label htmlFor="password">confirm password</label>
        <input type="password" placeholder='re-enter password' />
        <button type='submit'>Submit</button>
      </div>
    </>
  );
}

export default App;
