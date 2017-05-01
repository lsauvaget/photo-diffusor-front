import * as types from './types';

export default (state = {
    open: false,
    showButton: true
}, action) => {
    switch (action.type) {
            //FilmStrip
        case types.OPEN_FILMSTRIP:
            return {...state, open: true};

        case types.CLOSE_FILMSTRIP:
            return {...state, open: false};

        case types.SHOW_FILMSTRIP_BUTTON:
            return {...state, showButton: true};

        case types.HIDE_FILMSTRIP_BUTTON:
            return {...state, showButton: false};

        default:
            return state;
    }
};

export const openFilmStrip = () => ({
    type: types.OPEN_FILMSTRIP
});

export const closeFilmStrip = () => ({
    type: types.CLOSE_FILMSTRIP
});

export const showFilmStripButton = () => ({
    type: types.SHOW_FILMSTRIP_BUTTON
});

export const hideFilmStripButton = () => ({
    type: types.HIDE_FILMSTRIP_BUTTON
});
