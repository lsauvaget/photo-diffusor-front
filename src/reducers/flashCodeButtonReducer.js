import * as actions from '../actions';

const initialState = {
    show: true
};

export default (state = initialState, action) => {
    switch (action.type) {
            //FlashCode
        case actions.SHOW_FLASH_CODE_BUTTON:
            return {...state, show: true};

        case actions.HIDE_FLASH_CODE_BUTTON:
            return {...state, show: false};

        default:
            return state;
    }
}
