import axios from 'axios';

// define the base url for the API
const baseURL = 'https://fitnesstracker-be.onrender.com/api';
// const baseURL='http://localhost:3004/api';

// create an axios instance
const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export { instance, protectedInstance };




















// import axios from 'axios';

// const baseURL = 'https://fitnesstracker-be.onrender.com/api';

// // Create the axios instances
// export const instance = axios.create({
//     baseURL,
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export const protectedInstance = axios.create({
//     baseURL,
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     withCredentials: true,
// });














