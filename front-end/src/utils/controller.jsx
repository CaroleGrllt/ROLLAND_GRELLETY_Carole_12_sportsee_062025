export function getFirstName (data) {
    const firstName = data.getUserInfo().firstName
    return firstName
}

export function getTodayScore (data) {
    const score = data.getTodayScore()
    return score
}

export function getKeyData (data) {
    const keyData = data.getKeyData()
    return keyData
}

export function getActivity(data) {
    const sessions = data.getActivity()

    const formattedData = sessions.map((session, index) => ({
    name: (index + 1).toString(),     // "1", "2", "3", ...
    kg: session.kilogram,
    kCal: session.calories
    }))

    return formattedData
}

export function getSessions (data) {
    const formattedDays = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
    }

    const averageSessions = data.getSessions().map(session => ({
        name: formattedDays[session.day],
        sessionLength: session.sessionLength
    }))

    return averageSessions
}

export function getPerformance (data) {

    const allPerformances = data.getPerformance() // contient { kind, data }

    const performance = allPerformances.data.map((perf) => ({
        subject: allPerformances.kind[perf.kind], // transforme 1 → 'cardio'
        A: perf.value
    }))

    return performance
}