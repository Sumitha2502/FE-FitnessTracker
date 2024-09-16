import  protectedInstance  from '/src/activity/instance';

const log = {
    getGoals: async () => {
        return await protectedInstance.get('/goals');
    }
}

export default log;