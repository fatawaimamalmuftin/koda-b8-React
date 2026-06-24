import { useEffect, useState } from "react";

export default function useGetDataLocal(key) {
    const [user, setUser] = useState([]);

    useEffect(() => {

        const getLocal = async () => {
            try {
                const userData = localStorage.getItem(key);

                if (userData) {
                    setUser(JSON.parse(userData));
                } else {
                    setUser([]);
                }
            } catch (error) {
                console.error("Gagal mengambil/parse data dari localStorage:", error);
                setUser([]);
            }
        };

        getLocal();

    }, [key]);

    return user;
}