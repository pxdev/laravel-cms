import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        accessToken: null
    }),
    actions: {
        async login(email, password) {
            const data = {
                email,
                password
            }
            const headers = {
                'Content-Type': 'application/json'
            }
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', data, { headers })
                this.accessToken = response.data.access_token
            } catch (error) {
                console.error(error)
            }
        }
    }
})
