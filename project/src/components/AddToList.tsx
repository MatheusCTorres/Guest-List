import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IProps{
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
    }[]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

  const [input, setInput] = useState({
      name: "",
      age: "",
      note: "",
      img: ""
  })

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void =>{
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }

  const handleClick = () : void => {
    if(!input.name || !input.age || !input.img){
        return
    }
    setPeople([
        ...people, {
            name: input.name,
            age: parseInt(input.age),
            url: input.img,
            note: input.note
        }
    ])

    setInput({
        name: "",
        age: "",
        note: "",
        img: ""
    })
  }

  return (
    <div className="AddToList">
        <input type="text" placeholder="Name" className="AddToList-input" value={input.name} name="name" onChange={handleOnChange}/>
        <input type="number" placeholder="Age" className="AddToList-input" value={input.age} name="age" onChange={handleOnChange}/>
        <input 
                type="text"
                onChange={handleOnChange}
                className="AddToList-input"
                name="img"
                value={input.img}
                placeholder="Image Url"
            />
        <textarea placeholder="Notes" className="AddToList-input" value={input.note} name="note" onChange={handleOnChange}/>
        <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
    </div>
  )
}


export default AddToList