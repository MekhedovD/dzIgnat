type StateType = {
    _id: number
    name: string
    age: number
}

type SortUpType = {
    type: "sort"
    payload: "up"
}

type SortDownType = {
    type: "sort"
    payload: "down"
}

type CheckAgeType = {
    type: "check"
    payload: number //
}

type ActionType = SortUpType | SortDownType | CheckAgeType

export const homeWorkReducer = (state: Array<StateType>, action: ActionType): Array<StateType> => {
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === "up" ? newState : newState.reverse()
        }

        case "check": {
            return [...state.filter(el => el.age > 18)]
        }
        default:
            return state
    }
};