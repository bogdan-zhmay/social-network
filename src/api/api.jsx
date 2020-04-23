import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '52965883-8a5c-4691-a5a6-69f059e2ffa7'
  }
})

export const peopleAPI = {
  getPeople(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => { return response.data });
  }
}

export const followAPI = {
  followPeople(id) {
    return instance.post(`follow/${id}`)
      .then(response => { return response.data });
  },
  unfollowPeople(id) {
    return instance.delete(`follow/${id}`)
      .then(response => { return response.data });
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  }
}



