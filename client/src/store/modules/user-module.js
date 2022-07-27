import { userService } from "../../services/user.service";


export default {
    state: {
        loggedInUser: null,
    },

    getters: {
        getLoggedInUser: (state) => state.loggedInUser
    },
    mutations: {
        setUser: (state, { user }) => state.loggedInUser = user,
        setLogout: (state) => state.loggedInUser = null

    },
    actions: {

        async login({ commit }, { userInfo }) {
            try {
                const user = await userService.login(userInfo)
                commit({ type: 'setUser', user })
                return user

            } catch (err) {
                return console.log("you are Unauthorized");
            }
        },

        async signup({ commit }, { newUser }) {
            try {
                const user = await userService.signup(newUser)

                commit({ type: 'setUser', user })
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
        },

        async updateUser(ctx, { user }) {
            try {
                const updatedUser = await userService.updateUser(user)
                ctx.commit({ type: 'setUser', user: updatedUser })
            } catch (err) {
                return console.log('could not update user');
            }
        },
        async getLoggedInUser({ commit }) {
            const user = await userService.getLoggedInUser()
            commit({ type: 'setUser', user })
        },

        async toggleLikeStation({ commit, dispatch }, station) {
            try {

            } catch (err) {
                return console.log('cant add station ', err);
            }
        }

    }
}