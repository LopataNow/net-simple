import axios from "axios";

export interface Name {
    id: number;
    firstName: string;
    lastName: string;
}

export interface Paginated<T>{
    data: T[];
    totalCount: number;
}

export function getNames(from = 0, limit = -1) {
    return axios.get<Paginated<Name>>(`${import.meta.env.VITE_API_URL}/names`, {
        params: {
            from,
            limit
        }
    })
}

export function postName(name: Name) {
console.log('post name', name)
    return axios.post<Name>(`${import.meta.env.VITE_API_URL}/names`, name)
}

export function deleteName(id: number) {
    return axios.delete(`${import.meta.env.VITE_API_URL}/names/${id}`)
}