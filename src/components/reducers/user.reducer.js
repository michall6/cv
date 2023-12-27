export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "REGISTER":
        case "LOGIN":
            state =  payload ;
        break;
        default:
            break;
    }
    return state;
}