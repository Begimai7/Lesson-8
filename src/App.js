

import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';

import { Login } from './components/LoginPage/Login';
import { Timer } from './components/Timer/Timer';
import { Users } from './components/Users/Users';

function App() {
  const [isAuthenticated ,setIsAuthenticated ] = useState(false)
  const [ clickedUsers, setClickedUsers ] = useState(false)
  const [ timer , setTimer ] = useState(false)

  const timerHandler =()=>{
    setTimer((prev)=>!prev)
  }
console.log("Users Button ",clickedUsers);

  const usersHandler = ()=>{
    setClickedUsers((prev)=>!prev)
  }
  //  //////////////////////////////////////////
  useEffect(()=>{
    localStorage.setItem("Auth" ,JSON.stringify(isAuthenticated ) )

    return()=>{
        localStorage.removeItem("Auth")
    }
      }, [isAuthenticated])

      // /////////////////////////////////////
useEffect(()=>{
let data = localStorage.getItem("Auth")

setIsAuthenticated(!!data)
},[])


const loginHandler =()=>{
  setIsAuthenticated((prev)=>!prev)

}


  return (
    <div >
      <Header 
      isAuthenticated={isAuthenticated} 
      loginHandler = {loginHandler}
      usersHandler={usersHandler}
      clickedUsers={clickedUsers}
      timerHandler={timerHandler}
      timer={timer}

      />
      

      {isAuthenticated ? 
      (""
          ) : (
      <Login loginHandler={loginHandler} />)}

      {clickedUsers ?(<Users usersHandler={usersHandler}/>  ) :("")}
     {timer ?( <Timer timerHandler={timerHandler}  /> ):("") }
    </div>
  );
}

export default App;
