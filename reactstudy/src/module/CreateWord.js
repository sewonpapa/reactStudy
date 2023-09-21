import useFetch from '../hooks/useFetch';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateWord = () => {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        //if (window.confirm('등록하시겠습니까?')) {
        console.log(engRef.current.value);
        console.log(korRef.current.value);
        console.log(dayRef.current.value);

        if (!isLoading) {
            // 로딩중일때는 더이상 요청 안들어가게.
            setIsLoading(true);

            fetch('http://localhost:3001/words/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false,
                }),
            }).then((res) => {
                if (res.ok) {
                    alert('생성이 완료 되었습니다.');
                    navigate(`/day/${dayRef.current.value}`);
                    setIsLoading(false);
                }
            });
        }
        //}
    };

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

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
