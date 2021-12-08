import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "a51074dc-dc6a-4251-a2c5-f8bb44563881"
    }
});

export const usersAPI = {

    getProfile (userId) {
        return instance.get(`profile/` + userId)
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
    }
}