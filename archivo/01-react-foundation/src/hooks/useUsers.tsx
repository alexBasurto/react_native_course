import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { User, ReqResUserListResponse } from "../interfaces";

const loadUsers = async(page: number = 1): Promise<User[]> => {
    // Without axios
    // fetch('https://reqres.in/api/users?page=2')
    //     .then(resp => resp.json())
    //     .then(data => console.log(data));
    
    // Axios
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        });
        return data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currentPageRef.current)
            .then( setUsers );

    }, [])

    const nextPage = async() => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }

    const prevPage = async() => {
        if (currentPageRef.current <= 1) return;

        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

    return {
        // Properties
        users,


        // Methods
        nextPage,
        prevPage

    }
}