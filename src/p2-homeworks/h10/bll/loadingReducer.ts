type loadingACType = {
  type: "CHANGE-LOADING"
  loading: boolean
}

type InitialStateType = {
  loading: boolean
}

const initState: InitialStateType = {
  loading: false
};

export const loadingReducer = (state = initState, action: loadingACType): InitialStateType => { // fix any
  switch (action.type) {
    case "CHANGE-LOADING": {
      return {...state, loading: action.loading};
    }
    default:
      return state;
  }
};

export const loadingAC = (loading: boolean): loadingACType => ({
  type: "CHANGE-LOADING",
  loading
}); // fix any