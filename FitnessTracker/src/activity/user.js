import { instance, protectedInstance } from './instance';

// define the user 
const user = {
    // register a new user
    register: async (name, email, password, location) => {
        // make a POST request to the register endpoint
        return await instance.post('/users', {
            name,
            username: email,
            password,
            location
        });
    },
    login: async (email, password) => {
        // make a POST request to the login endpoint
        return await instance.post('/users/login', {
            username: email,
            password
        }, { withCredentials: true });
    },
    // get the currently logged in user
    getCurrentUser: async () => {
        // make a GET request to the me endpoint
        return await protectedInstance.get('/users/me');
    },
    // logout the currently logged in user
    logout: async () => {
        // make a POST request to the logout endpoint
        return await protectedInstance.get('/users/logout');
    }

    // logout: async () => {
    //     try {
    //         const response = await protectedInstance.get('/users/logout');
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error logging out:', error);
    //         throw error;
    //     }
    // },
}

// export the user 
export default user;