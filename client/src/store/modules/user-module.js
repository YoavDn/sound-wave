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

        // async updateUserLikedSong(ctx, { data }) {
        //     try {
        //         const {_id} = ctx.state.loggedInUser.likedSongs
        //         const newLikedSongs = await userService.updateUserLikedSong(_id, data)
        //         console.log(userToUpdate);
        //         ctx.commit({ type: 'setUser', user: userToUpdate })
        //     } catch (err) {
        //         return console.log('could not update user');
        //     }
        // }

    }
}