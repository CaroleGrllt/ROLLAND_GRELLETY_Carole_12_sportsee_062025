import axios from 'axios'
import {
  MOCKED_USER_MAIN_DATA,
  MOCKED_USER_ACTIVITY,
  MOCKED_USER_AVERAGE_SESSIONS,
  MOCKED_USER_PERFORMANCE
} from '../data/mockedData'



export default class DataUser {
  constructor(userId, env) {
    this.id = userId
    this.environnement = env === 'prod' // true ou false. Si true => API. Si false => data mockées
  }

  async getData() {
      if (this.environnement) {
        try {
          const [userMain, userActivity, userSessions, userPerf] = await Promise.all([
            axios.get(`http://localhost:3000/user/${this.id}`),
            axios.get(`http://localhost:3000/user/${this.id}/activity`),
            axios.get(`http://localhost:3000/user/${this.id}/average-sessions`),
            axios.get(`http://localhost:3000/user/${this.id}/performance`)
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
