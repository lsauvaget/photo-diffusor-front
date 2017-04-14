import * as actions from '../actions';

export default (state = {
    open: false,
    showButton: true
}, action) => {
    switch (action.type) {
            //FilmStrip
        case actions.OPEN_FILMSTRIP:
            return {...state, open: true};

        case actions.CLOSE_FILMSTRIP:
            return {...state, open: false};

        case actions.SHOW_FILMSTRIP_BUTTON:
            return {...state, showButton: true};

        case actions.HIDE_FILMSTRIP_BUTTON:
            return {...state, showButton: false};

        default:
            return state;
    }
};
