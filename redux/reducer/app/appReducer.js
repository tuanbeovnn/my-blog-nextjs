import appAction from "../../actions/app";
const initialState = {
    user: {},

};

const reducer = (state = initialState, action) => {
    const copyState = { ...state };

    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;