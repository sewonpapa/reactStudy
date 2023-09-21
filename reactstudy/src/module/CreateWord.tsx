import useFetch from '../hooks/useFetch';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IDay } from './DayList';

const CreateWord = () => {
    const days : Array<IDay> = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        if (window.confirm('등록하시겠습니까?')) {
        if (!isLoading && dayRef.current && engRef.current && korRef.current) {
            // 로딩중일때는 더이상 요청 안들어가게.
            setIsLoading(true);

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch('http://localhost:3001/words/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day, 
                    eng, 
                    kor, 
                    isDone: false
                }),
            }).then((res) => {
                if (res.ok) {
                    alert('생성이 완료 되었습니다.');
                    navigate(`/day/${day}`);
                    setIsLoading(false);
                }
            });
        }
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label>Eng</label>
                    <input
                        type="text"
                        placeholder="영문명을 입력하세요."
                        ref={engRef}
                    />
                </div>
                <div className="input_area">
                    <label>Kor</label>
                    <input
                        type="text"
                        placeholder="한글명을 입력하세요."
                        ref={korRef}
                    />
                </div>
                <div className="input_area">
                    <label>Day</label>
                    <select ref={dayRef}>
                        {days.map((day) => (
                            <option key={day.id}>{day.day}</option>
                        ))}
                    </select>
                </div>
                <button
                    style={{
                        opacity: isLoading ? 0.3 : 1,
                    }}
                >
                    {isLoading ? 'Saving...' : '저장'}
                </button>
            </form>
        </>
    );
};

export default CreateWord;
