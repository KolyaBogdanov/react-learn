import React, { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [groups, setGroups] = useState([]) 
  const [genre, setGenre ] = useState('')
  const [id, setId] = useState('')
  const [songName, setSongName] = useState('')
  const [groupName, setGroupName] = useState('')
  const [photo, setPhoto] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [searchLimit, setSearchLimit] = useState(10)

  let getGroups = async function () {
    const url = new URL('https://678f887149875e5a1a924b2c.mockapi.io/api/Music');
    url.searchParams.append('genre', genre);
    url.searchParams.append('id', id);
    url.searchParams.append('songName', songName);
    url.searchParams.append('groupName', groupName);
    url.searchParams.append('photo', photo);
    url.searchParams.append('limit', searchLimit);


    let response = await fetch(url);
      setGroups([])
      let groups = await response.json();
      setGroups (groups);
      console.log(groups)
  }
  useEffect(()  => {getGroups()},[searchLimit]);
  return (
    <div className='wrapp'>
      <div className='wrapp_title'>
        <p >Best groups</p>
        <div className='search'>
          <p className="search_txt">find your favorite songs</p>
          <div className='inputs'>
          <select 
          value={ searchLimit }
          onChange={e => setSearchLimit(e.target.value)}>
            <option value={ 10 }>10</option>
            <option value={ 20 }>20</option>
          </select>
            <input className='input' placeholder="введите айди" type="number"  value={ id } onChange={(e) => {
              console.log(e);
              setId(e.target.value)
            }}/>
            <input className='input' placeholder="введите название песни" type="text" value={ songName } onChange={(e) => {
              console.log(e);
              setSongName(e.target.value)
            }}/>
            <input className='input' placeholder="введите название группы" type="text" value={ groupName } onChange={(e) => {
              console.log(e);
              setGroupName(e.target.value)
            }}/>
            <input className='input' placeholder="введите жанр" type="text" value={ genre } onChange={(e) => {
              console.log(e);
              setGenre(e.target.value)
            }}/>
            <button className='btn' onClick={getGroups}>search</button>
          </div>
        </div>
      </div>
      <div className='cards'>
      {groups.map((group) =>(
        <div key={ group.id } className='card'>
          <div className='card_inner'>
            <img className='img' src= { group.photo } alt="" />
            <div className="card_txt">
              <p > { group.groupName } </p>
              <p > { group.genre } </p>
              <p > { group.songName } </p>
            </div>
          </div> 
          <p className='card_id'>{ group.id }</p>
        </div>
      ))}
      </div> 
    </div>
    
  )
}


