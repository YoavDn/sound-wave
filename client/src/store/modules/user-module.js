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
                console.log(user);
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
                console.log(updatedUser);
                ctx.commit({ type: 'setUser', user: updatedUser })
                return updatedUser
            } catch (err) {
                return console.log('could not update user');
            }
        },
        async getLoggedInUser({ commit }) {
            let user = await userService.getLoggedInUser()
            user = await userService.getUser(user)

            commit({ type: 'setUser', user })
        },

        async toggleLikeStation(ctx, { station }) {
            try {
                if (!ctx.state.loggedInUser) return
                const user = ctx.state.loggedInUser
                const userToUpdate = JSON.parse(JSON.stringify(user))

                // when station already in user stations
                if (user.stations.some(id => id === station)) {

                    const idx = user.stations.findIndex(id => id === station)
                    userToUpdate.stations.splice(idx, 1)
                } else {
                    userToUpdate.stations.unshift(station)
                }
                await ctx.dispatch({ type: 'updateUser', user: userToUpdate })



            } catch (err) {
                return console.log('cant add station ', err);
            }
        },

        async removeStationFromUser(ctx, { station }) {
            try {
                if (!ctx.state.loggedInUser) return
                const user = ctx.state.loggedInUser
                const userToUpdate = JSON.parse(JSON.stringify(user))

                if (user.stations.some(id => id === station)) {
                    const idx = user.stations.findIndex(id => id === station)
                    userToUpdate.stations.splice(idx, 1)
                }

                await ctx.dispatch({ type: 'updateUser', user: userToUpdate })

            } catch {

            }
        }

    }
}