const OPEN_FILMSTRIP = 'OPEN_FILMSTRIP';
const CLOSE_FILMSTRIP = 'CLOSE_FILMSTRIP';
const SHOW_FILMSTRIP_BUTTON = 'SHOW_FILMSTRIP_BUTTON';
const HIDE_FILMSTRIP_BUTTON = 'CLOSE_FILMSTRIP_BUTTON';

export default (state = {
    open: false,
    showButton: true
}, action) => {
    switch (action.type) {
            //FilmStrip
        case OPEN_FILMSTRIP:
            return {...state, open: true};

        case CLOSE_FILMSTRIP:
            return {...state, open: false};

        case SHOW_FILMSTRIP_BUTTON:
            return {...state, showButton: true};

        case HIDE_FILMSTRIP_BUTTON:
            return {...state, showButton: false};

        default:
            return state;
    }
};

export const openFilmStrip = () => ({
    type: OPEN_FILMSTRIP
});

export const closeFilmStrip = () => ({
    type: CLOSE_FILMSTRIP
});

export const showFilmStripButton = () => ({
    type: SHOW_FILMSTRIP_BUTTON
});

export const hideFilmStripButton = () => ({
    type: HIDE_FILMSTRIP_BUTTON
});
