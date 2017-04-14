import * as actions from '../actions';

const initialState = {
    link: '',
    shortLink: '',
    show: false
};

export default (state = initialState, action) => {
    switch (action.type) {
            //FlashCode
        case actions.SHOW_FLASH_CODE:
            return {...state, show: true};

        case actions.CLOSE_FLASH_CODE:
            return {...state, show: false};

        case actions.RECEIVE_SHORT_LINK:
            return {...state, shortLink: action.flashCodeShortLink};

        default:
            return state;
    }
}
