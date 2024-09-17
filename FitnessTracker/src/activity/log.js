import protectedInstance from './instance';

const log = {
    getGoals: async () => {
        return await protectedInstance.get('/goals');
    }
}

export default log;