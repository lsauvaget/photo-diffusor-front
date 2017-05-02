import types from './types.js';

const initialState = {
    link: '',
    shortLink: '',
    show: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_FLASH_CODE:
            return {...state, show: true};

        case types.CLOSE_FLASH_CODE:
            return {...state, show: false};

        case types.FETCH_SHORT_LINK_SUCCEEDED:
            return {...state, shortLink: action.link};

        default:
            return state;
    }
}
