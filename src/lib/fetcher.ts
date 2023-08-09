import {User} from "../../interfaces/interfaces";

export const fetcherPure = async (URL: string) => {
    const id = Math.floor(Math.random() * (10 - 1)) + 1
    const response = await fetch(`${URL}/${id}`);
    return (await response.json()) as User
};

export const URL = "https://jsonplaceholder.typicode.com/users";

