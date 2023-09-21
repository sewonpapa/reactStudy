import { useState } from 'react';

const Word = (props) => {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(props.word.isDone);
    const [word, setWord] = useState(props.word);

    const toggleShow = () => {
        setIsShow(!isShow);
    };

    const toggleDone = () => {
        //setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((resp) => {
            if (resp.ok) setIsDone(!isDone);
        });
    };

    // 단어 삭제
    const onDelete = () => {
        if (window.confirm('단어를 삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
                // 삭제는 메소드만 넘겨주면 됨.
            }).then((resp) => {
                if (resp.ok) setWord({ id: 0 });
            });
        }
    };

    if (word.id === 0) return null;

    return (
        <tr className={isDone ? 'off' : 'on'}>
            <td>
                <input type="checkbox" onChange={toggleDone} checked={isDone} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            {/* <td>{word.isDone ? '학습완료' : '학습미완료'}</td> */}
            <td>
                <button onClick={toggleShow}>
                    {isShow ? '뜻 숨기기' : '뜻 보기'}
                </button>
                <button className="btn_del" onClick={onDelete}>
                    삭제
                </button>
            </td>
        </tr>
    );
};

export default Word;
