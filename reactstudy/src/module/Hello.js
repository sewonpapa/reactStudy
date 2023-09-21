import { useState } from 'react';
import UserName from './UserName.js';

const Hello = ({ age }) => {
    const [name, setName] = useState('Mike');
    //const [age, setAge] = useState(props.age);

    function changeName() {
        //console.log(name);
        setName(name === 'Mike' ? 'Jane' : 'Mike');
        console.log(age);
        //setAge(age + 10);
    }

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">
                {name}({age})
            </h2>
            <UserName name={name} />
            <button onClick={changeName}>이름변경</button>
        </div>
    );
};

export default Hello;
