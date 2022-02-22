import {useState} from 'react';
import List from './components/List'
import './App.css';
import AddToList from './components/AddToList';

export interface IState {
  people:{
    name: string;
    age: number;
    url: string;
    note?:string;
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "aaa",
      age: 20,
      url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      note: "alergic to milk"
    }
  ])

  return (    
    <div className="App">
      <h1>People who i invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;