import { useEffect, useState } from "react";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";
import { History } from "./components/History/History";
import { Select } from "./components/Select/Select";
import { Statistics } from "./components/Statistics/Statistics";

function App() {
  const[search,setSearch] = useState('');
  const[mode,setMode] = useState('active');
  const[users,setUsers] = useState([]);

  useEffect(() => {
      fetch('./db.json')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[]);
  
  const part_users = users.filter(user => user.status === mode);

  const users_list = part_users.filter(user => user.name.toLowerCase()
  .includes(search.toLowerCase()));

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
          <Select />
        </div>
       <div className="row2">
        <section className="section1">
          
          <Filters 
            mode={mode} 
            setMode={setMode} 
            search={search} 
            setSearch = {setSearch}/>
          <History users = {users_list} search = {search}/>
        </section>
        <section className="section2">
         
          <Statistics />
        </section>
       </div>
        
        
      </div>
    </div>
  );
}

export default App;
