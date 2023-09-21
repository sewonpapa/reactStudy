import { useEffect, useState } from 'react';

export default function (url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setData(data);
            });
    }, [url]);

    return data;
}
