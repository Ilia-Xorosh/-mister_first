import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "a51074dc-dc6a-4251-a2c5-f8bb44563881"
    }
});

export const profileAPI = {

    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, {status: status} )
    }

}

export const usersAPI = {

    getProfile (userId) {
        console.warn('Obsolete method. Please ProfileAPI object.');
        return profileAPI.getProfile (userId);
    },

getUsers (currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
    return response.data;
})
},

unfollow (userId) {
    return instance.delete(`follow/${userId}`).then(response => {
        return response.data;
    })
},

follow (userId) {
    return instance.post(`follow/${userId}`).then(response => {
        return response.data;
    })
}
}

export const authAPI = {
    me () {
    return instance.get(`auth/me`)
    },

    loginPost () {
    return instance.post(`auth/login`).then(response => {
        return response.data;
    })
    },

    loginDelete () {
        return instance.delete(`auth/login`).then(response => {
            return response.data;
        })
    }
}
