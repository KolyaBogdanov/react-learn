import React, { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  
  const [cats, setCats] = useState([])
  const [id, setId ] = useState('')
  const [name, setName ] = useState('')
  const [cat, setCat ] = useState('')
  const [age, setAge ] = useState('')
  const [page, setPage ] = useState(1)
  const [searchLimit, setSearchLimit] = useState(10)
  const [selectValue, setSelectValue] = useState('')
  const [order, setOrderBy] = useState('')
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight, 
      behavior: 'smooth' 
    });
  };
  let getCats = async function () {
    const url = new URL('https://678f887149875e5a1a924b2c.mockapi.io/api/Cats');
    url.searchParams.append('limit', searchLimit);
    url.searchParams.append('page', page);
    url.searchParams.append('id', id);
    url.searchParams.append('name', name);
    url.searchParams.append('cat', cat);
    url.searchParams.append('age', age);
    url.searchParams.append('sortBy', selectValue);
    url.searchParams.append('order', order);
    let response = await fetch(url);
    setCats([])
    let cats = await response.json();
    setCats (cats);
    console.log(cats)
  }
  useEffect(()  => {getCats()},[page,selectValue,order]);
  return (
    <div>
      <button className='btn' onClick={scrollToBottom}>мага я по салону гуляю</button>
      <div className='site'>
          <div className="inputs">
            <input type="number" placeholder="введите число" value = {searchLimit} onChange={(event) => {
              console.log(event);
              setSearchLimit(event.target.value)
          }}
          />
          <input type="number" placeholder="введите ID" value = {id} onChange={(event) => {
              console.log(event);
              setId(event.target.value)
          }}
          />
          <input type="text" placeholder="введите имя" value = {name} onChange={(event) => {
              console.log(event);
              setName(event.target.value)
          }}
          />
          <input type="text" placeholder="введите породу" value = {cat} onChange={(event) => {
              console.log(event);
              setCat(event.target.value)
          }}
          />
          <input type="number" placeholder="введите возраст" value = {age} onChange={(event) => {
              console.log(event);
              setAge(event.target.value)
          }}
          />
          <select 
          value={selectValue}
          onChange={e => setSelectValue(e.target.value)}>
            <option value="id">Айди</option>
            <option value="name">Имя</option>
            <option value="cat">Порода</option>
            <option value="age">Возраст</option>
          </select>

          <select 
          value={order}
          onChange={e => setOrderBy(e.target.value)}>
            <option value="asc">А-Я</option>
            <option value="desc">Я-А</option>
          </select>
            <button className='btn' onClick={getCats}>поиск</button>
          </div>
        <div className='cards' >
          {cats.map((cat) =>(
            <div className='card_wrapp'>
              <div className='card_inner'>
                <img className='card_img' src={ cat.avatar } alt="" />
                <div className='id_name'>
                  <p className='card_id'>{ cat.id }</p>
                  <p className='card_name'>{ cat.name }</p>
                </div>
                <CatInfo item={cat}></CatInfo>
              </div>
              <button className='btn'>Познакомиться поближе{'  >>'}</button>
            </div>
          ))} 
        </div>
    </div>
    </div>
  ) 
}

function CatInfo({item}) {
    if(item.cat && item.age) {
      return (
        <div>
          <p className='card_name_age'>Breed: { item.cat }</p>
          <p className='card_name_age'>Age: { item.age }</p>
        </div>
      ) 
    }

    return <div></div>
}
// добавить выбор URL cats или name 

// создать еще 1 в мокаи с каталогом каким нибудь 8+ полей и вывести их карточками с фильтрами и сортировкой 

// import React, { useState, useEffect } from 'react';
// import './App.css'

// export default function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [info, setInfo] = useState('');
//   const [jobTitle, setJobTitle ] = useState('')
//   const [Id, setId ] = useState('')
//   const [page, setPage ] = useState(1)
//   const [searchLimit, setSearchLimit] = useState('')
//   const [sortBy, setSortBy] = useState('')
//   const [order, setOrderBy] = useState('')

//   let getUsers = async function () { 
//     const url = new URL('https://678f887149875e5a1a924b2c.mockapi.io/api/name');
//     url.searchParams.append('page', page);
//     url.searchParams.append('limit', searchLimit);
//     url.searchParams.append('search',info);
//     if (sortBy != '') {
//       url.searchParams.append('sortBy', sortBy);
//     }
//     if (order != '') {
//       url.searchParams.append('order', order);
//     }
//     if (jobTitle != '') {
//       url.searchParams.append('jobTitle',jobTitle);
//     }
//     if (Id != '') {
//       url.searchParams.append('id',Id);
//     }
//     setIsLoading(true);
//     setUsers([])
//     let response = await fetch(url);
//     setIsLoading(false);
//     let users = await response.json(); 
//     setUsers (users);
//   }
//   useEffect(()  =>  {
//     getUsers()
//   },[page, sortBy, order]);
//   let next = () => {
//     console.log(page)
//     setPage(page => page + 1);
//   }
//   let prev = () => {
//     if (page == 1) {
//       return
//     }
//     setPage(page => page - 1);
//   }
//   let sortIcon = (column) => {
//     if (column == sortBy) {
//       return order == 'asc' ? '+' : '-'
//     }
    
//   }
//   let columnClicked = (column) => {
//     let orderLocal = order == 'asc' ? 'desc' : 'asc'
//     if (column !== sortBy) {
//       orderLocal = 'asc'
//     } 
//     setSortBy(column)
//     setOrderBy(orderLocal)
//   }
//   return (
//     <div className='wrapp'>
//       { isLoading ? 'загружаем' : 'загружено' }
//     <table>
//       <tr>
//           <td><div onClick={() => columnClicked('id')}>Id {sortIcon('id')}</div></td>
//           <td><div onClick={() => columnClicked('name')}>Name {sortIcon('name')}</div></td>
//           <td><div onClick={() => columnClicked('jobTitle')}>Job Title {sortIcon('jobTitle')}</div></td>
//           <td><div onClick={() => columnClicked('avatar')}>Avatar {sortIcon('avatar')}</div></td>
//       </tr>
//       {users.map((user) => (
//         <div>
//           <tr>
//             <td>{ user.id }</td>
//             <td>{ user.name }</td>
//             <td>{ user.jobTitle }</td>
//             <td><img src={ user.avatar } alt="" />
//           </td>
//         </tr>
//          </div>
//       ))} 
//       <button className='btn' onClick={getUsers}>поиск</button>  
//       <input type="text" placeholder="введите имя" value = {info} onChange={(event) => {
//         console.log(event);
//         setInfo(event.target.value)
//       }}
//       />
//       <input type="text" placeholder="введите работу" value = {jobTitle} onChange={(event) => {
//         console.log(event);
//         setJobTitle(event.target.value)
//       }}
//       />
//       <input type="text" placeholder="айди" value = {Id} onChange={(event) => {
//         console.log(event);
//         setId(event.target.value)
//       }}
//       />
//     </table>
//     <input type="number" placeholder="введите число" value = {searchLimit} onChange={(event) => {
//         console.log(event);
//         setSearchLimit(event.target.value)
//     }}
//     />
//     <button className='btn' onClick={prev}>&larr;</button>
//     <button className='btn' onClick={next}>&rarr;</button>
//     </div>
//   );
// }