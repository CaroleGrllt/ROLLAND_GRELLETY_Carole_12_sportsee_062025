import axios from 'axios'
import {
  MOCKED_USER_MAIN_DATA,
  MOCKED_USER_ACTIVITY,
  MOCKED_USER_AVERAGE_SESSIONS,
  MOCKED_USER_PERFORMANCE
} from '../data/mockedData'

// Lit l'URL de l'API depuis les variables d'env Vite (.env.*)
// Fallback local si non définie
const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/+$/, '')

// Client axios avec baseURL (évite de répéter l’URL)
const api = axios.create({ baseURL: API_URL })

export default class DataUser {
  constructor(userId, env) {
    this.id = userId
      // Utilise l'API si env === 'prod' OU si VITE_API_URL est définie (pratique en prod)
      this.environnement = (env === 'prod') || Boolean(import.meta.env.VITE_API_URL)
    }

  async getData() {
      if (this.environnement) {
        try {
          const [userMain, userActivity, userSessions, userPerf] = await Promise.all([
            api.get(`/user/${this.id}`),
            api.get(`/user/${this.id}/activity`),
            api.get(`/user/${this.id}/average-sessions`),
            api.get(`/user/${this.id}/performance`)
          ])

          console.log('origine des données : API')

          this.mainData = userMain.data.data
          this.activity = userActivity.data.data
          this.averageSessions = userSessions.data.data
          this.performance = userPerf.data.data
        } catch (error) {
          console.log("Erreur lors de la récupération des données depuis l'API :", error)
        }
      } else {
        
        console.log('origine des données données : mock')

        this.mainData = MOCKED_USER_MAIN_DATA.find(user => user.id === this.id)
        this.activity = MOCKED_USER_ACTIVITY.find(user => user.userId === this.id)
        this.averageSessions = MOCKED_USER_AVERAGE_SESSIONS.find(user => user.userId === this.id)
        this.performance = MOCKED_USER_PERFORMANCE.find(user => user.userId === this.id)
      }
    }

    getUserInfo() {
      return this.mainData.userInfos
    }

    getTodayScore() {
      return this.mainData.todayScore || this.mainData.score // selon si todayscore ou score utilisé
    }

    getKeyData() {
      return this.mainData.keyData
    }

    getActivity() {
      return this.activity?.sessions
    }

    getSessions() {
      return this.averageSessions?.sessions
    }

    getPerformance() {
      return this.performance
    }
  }
