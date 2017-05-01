import * as types from './types.js';

const initialState = {
    show: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.DISABLE_FULL_SCREEN:
        case types.SHOW_FLASH_CODE_BUTTON:
            return {...state, show: true};

        case types.ENABLE_FULL_SCREEN:
        case types.HIDE_FLASH_CODE_BUTTON:
            return {...state, show: false};

        default:
            return state;
    }
}

export const showFlashCodeButton = () => ({
    type: types.SHOW_FLASH_CODE_BUTTON
});

export const hideFlashCodeButton = () => ({
    type: types.HIDE_FLASH_CODE_BUTTON
});
