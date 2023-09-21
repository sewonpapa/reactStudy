import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const dayLength = days.length;
    const navigate = useNavigate();

    const addDay = () => {
        if (window.confirm('day를 추가하시겠습니까?')) {
            fetch('http://localhost:3001/days/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: dayLength + 1,
                    day: dayLength + 1,
                }),
            }).then((resp) => {
                if (resp.ok) navigate('/');
            });
        }
    };
    console.log('sdfdsf');
    return (
        <>
            <div>
                <h3>현재 일수 : {dayLength}일</h3>
                <button onClick={addDay}>Day 추가</button>
            </div>
        </>
    );
}
