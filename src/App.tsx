import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Button from "./components/button/Button";
import UserInfo from "./components/user-info/UserInfo";
import {User} from "../interfaces/interfaces";
import  {fetcherPure, URL} from "./lib/fetcher";
import useThrottle from "./hooks/useThrottle";

function App() {
    const [item, setItem] = useState<Record<number, User>>({});
    const debouncedValue = useThrottle(item, 500)
    const receiveRandomUser =  () => {
        fetcherPure(URL).then((res) => setItem(res))
    };

    const handleButtonClick = useCallback((
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        receiveRandomUser();
        fetcherPure(URL).then((res) => console.log(res))
    },[])

    useEffect(() => {
        receiveRandomUser();
    }, []);

    return (
        <div>
            <header>Get a random user</header>
            <Button onClick={handleButtonClick}/>
            <UserInfo user={debouncedValue as User}/>
        </div>
    );
}

export default App;
