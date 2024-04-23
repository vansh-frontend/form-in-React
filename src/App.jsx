// import React, {  useEffect, useState } from "react";
// import One from "./vansh";
// import "./App.css";


// const App = () => {

//   const [values,setValues] = useState({
//     username : 'navraj',
//     email : 'navraj@gmail.com',
//   });


//   const handleForm = (e) => {
//     const name = e.target.name;

//     if(name == 'username') {
//       setValues({  username : e.target.value });
//     } else if (name == 'email') {
//       setValues({ ...values , email : e.target.value });
//     }
//   }
  


//   return (
//    <>

//       <div className="forms"></div>
//       <h1>form's in react</h1>

//       <form>
     
//         <label htmlFor="useranme">useranme</label>
//         <input type='text' name='username' placeholder="useraname(only name)" pattern="" autoComplete="on" required/>
//         <label htmlFor="email">Email</label>
//         <input type="email" placeholder="forexample@gmail.com"  />
//         <label htmlFor="password">Password</label>
//         <input type="password" />
//         <button type="submit" value="login">login</button>

      
        
//       </form>
   
//    </>
//   )
// }


// export default App;