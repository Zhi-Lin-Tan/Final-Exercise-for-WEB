import React from 'react'
import NavigationBar from './components/navigationBar'

function App() {


  return (
    <>
      <div>
        <h1 style={
          {top: '0',
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          backgroundColor: 'lightblue',
          color: 'black',
          height: '100px',
          lineHeight: '100px',
          alignContent: 'center',
          marginTop: '0',
        }
        }>Welcome to the website</h1>

        <NavigationBar />
      </div>
    </>
  )
}

export default App
