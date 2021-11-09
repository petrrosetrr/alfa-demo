import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/image/random',
    timeout: 10000,
});

export interface IDogData {
    status: string,
    message: Array<string>;
}

interface IDogApi {
    getRandomDogs: (count?: number) => Promise<IDogData>;
}

export const dogApi: IDogApi = {
    async getRandomDogs (count: number = 50) {
        try {
            const response = await axiosInstance.get(`${count}`);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}