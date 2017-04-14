import * as actions from '../actions';

export default (state={open: true}, action) => {
    switch (action.type) {
        case actions.CLOSE_WELCOME_POPIN:
            return {
                ...state, 
                open: false
            };

        case actions.OPEN_WELCOME_POPIN:
            return {
                ...state,
                open: true
            };
        default:
            return state;
    }
}
