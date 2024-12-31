import React, { useContext, useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import CountryList from './CountryList'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useContext(ThemeContext)
  return (
   <main className={isDark? 'dark' : ' '}>
    <div className="search-fillter-container">
        <Search setQuery={setQuery}/>
        <Filter setQuery={setQuery}/>
    </div>
    <CountryList query={query}/>
   </main>
  )
}
