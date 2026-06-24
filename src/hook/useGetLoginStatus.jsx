import { useEffect, useState } from "react";

export default function useGetLoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        async function getlocal() {
            const loginStatus = localStorage.getItem('isLoggedIn');
            if (loginStatus === 'true') {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }
        getlocal();
    }, []);

    return isLoggedIn;
}