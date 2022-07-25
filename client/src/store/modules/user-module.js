import { userService } from "../../services/user.service";


export default {
    state: {
        loggedInUser: null,
    },

    getters: {
        getLoggedInUser: (state) => state.loggedInUser
    },
    mutations: {
        setLoggedInUser: (state, { user }) => state.loggedInUser = user,
        setLogout: (state) => state.loggedInUser = null

    },
    actions: {

        async login({ commit }, { userInfo }) {
            try {
                const user = await userService.login(userInfo)
                commit({ type: 'setLoggedInUser', user })
                return user

            } catch (err) {
                return console.log("you are Unauthorized");
            }
        },

        async signup({ commit }, { newUser }) {
            try {
                const user = await userService.signup(newUser)
                console.log(newUser);
                commit({ type: 'setLoggedInUser', user })
                return user

            } catch (err) {
                return console.log("something went wrong");
            }
        },

        async logout({ commit }) {
            try {
                console.log('gothere');
                await userService.logout()
                commit({ type: 'setLogout' })
            } catch (err) {
                return console.log('cant logout for some reson', err);
            }
        }

    }
}