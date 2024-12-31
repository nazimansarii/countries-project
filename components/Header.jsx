import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext)

  // if(isDark)
  // {
  //   document.body.classList.add('dark')
  // } else{
  //   document.body.classList.remove('dark')
  // }
  return (
    <header className={`header-container ${isDark? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="main-title">Where in the world?</h2>
        <button className="drk" onClick={() => {
          setIsDark(!isDark)
          localStorage.setItem('isDark', !isDark)
        }}>
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;<span>{isDark ? 'Light' : 'Dark'} Mode</span>
        </button>
      </div>
    </header>
  )
}
