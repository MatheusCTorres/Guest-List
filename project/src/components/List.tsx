interface IProps {
    people:{
        name: string;
        age: number;
        url: string;
        note?: string;
    }[]
}

const List: React.FC<IProps> = ({people}) =>{

    const renderList = () =>{
        return people.map(person =>{
            return(
                <li className="List">
                    <div className="List-header">
                        <img src={person.url} alt="person" className="List-img" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-Note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
           {renderList()}
        </ul>
    )
}
export default List