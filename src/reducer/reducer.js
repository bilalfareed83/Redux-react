const iState = {
    name: "Bilal",
    wishes: ['Developer', 'React']
}

const reducer = (state = iState, action) => {
    if (action.type === "CHANGE_NAME") {
        return {
            name: action.payload
        }
    }
    return state
}


export default reducer