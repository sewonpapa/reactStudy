import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word.js';

export default function Day() {
    const { day } = useParams();

    const wordList = useFetch(`http://localhost:3001/words?day=${day}`);
    // const [wordList, setWordList] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then((resp) => {
    //             return resp.json();
    //         })
    //         .then((data) => {
    //             setWordList(data);
    //         });
    // }, []);

    return (
        <>
            <h2>Day {day}</h2>
            {wordList.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {wordList.map((word) => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
