export const types = {
    OPEN_FILMSTRIP: 'FILMSTRIP/OPEN',
    CLOSE_FILMSTRIP: 'FILMSTRIP/CLOSE',
    SHOW_FILMSTRIP_BUTTON: 'FILMSTRIP/SHOW_BUTTON',
    HIDE_FILMSTRIP_BUTTON: 'FILMSTRIP/CLOSE_BUTTON'
}

export default (state = {
    open: false,
    showButton: true
}, action) => {
    switch (action.type) {
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

const openFilmStrip = () => ({ type: types.OPEN_FILMSTRIP });
const closeFilmStrip = () => ({ type: types.CLOSE_FILMSTRIP });
const showFilmStripButton = () => ({ type: types.SHOW_FILMSTRIP_BUTTON });
const hideFilmStripButton = () => ({ type: types.HIDE_FILMSTRIP_BUTTON });

export const actions = {
    openFilmStrip,
    closeFilmStrip,
    showFilmStripButton,
    hideFilmStripButton
}

