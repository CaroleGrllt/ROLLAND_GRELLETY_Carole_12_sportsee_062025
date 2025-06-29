import {
  MOCKED_USER_MAIN_DATA,
  MOCKED_USER_ACTIVITY,
  MOCKED_USER_AVERAGE_SESSIONS,
  MOCKED_USER_PERFORMANCE
} from '../data/mockedData'

export default class DataUser {
  constructor(userId) {
    this.id = userId

    // Récupération des différentes sources de données pour l'utilisateur
    this.mainData = MOCKED_USER_MAIN_DATA.find((user) => user.id === userId)
    console.log(this.mainData)
    this.activity = MOCKED_USER_ACTIVITY.find((user) => user.userId === userId)
    this.averageSessions = MOCKED_USER_AVERAGE_SESSIONS.find((user) => user.userId === userId)
    this.performance = MOCKED_USER_PERFORMANCE.find((user) => user.userId === userId)
  }

  // Exemple de méthodes pour exposer les données
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
