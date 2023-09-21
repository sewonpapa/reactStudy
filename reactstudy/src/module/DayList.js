import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const DayList = () => {
    const days = useFetch('http://localhost:3001/days');
    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //         .then((res) => {
    //             //console.log('res', res);
    //             return res.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setDays(data);
    //         });
    // }, []);

    // Loading progress... 처리
    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <ul className="list_day">
                {days.map((day) => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DayList;
