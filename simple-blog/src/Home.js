import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const handleClick = (e) => {
        setName(inputName);
        setAge(inputAge);
    }

    const handleInputNameChange = (e) => {
        setInputName(e.target.value);
    }

    const handleInputAgeChange = (e) => {
        setInputAge(e.target.value);
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <label htmlFor="">input name
            <p></p></label>
            <input type="text" value={inputName} onChange={handleInputNameChange} placeholder="Enter name"/>
            <p></p>
            <label htmlFor="">input name</label>
            <p><input type="text" value={inputAge} onChange={handleInputAgeChange} placeholder='Enter Age'/></p>
            
            <p><button onClick={handleClick}>Click Me</button></p>

        </div>
    );
}

export default Home;
