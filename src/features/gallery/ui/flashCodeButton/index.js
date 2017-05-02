export const types = {
    SHOW_FLASH_CODE_BUTTON: 'FLASHCODE_BUTTON/SHOW',
    HIDE_FLASH_CODE_BUTTON: 'FLASHCODE_BUTTON/HIDE'
}

const initialState = {
    show: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_FLASH_CODE_BUTTON:
            return {...state, show: true};

        case types.HIDE_FLASH_CODE_BUTTON:
            return {...state, show: false};

        default:
            return state;
    }
}

const showFlashCodeButton = () => ({ type: types.SHOW_FLASH_CODE_BUTTON });
const hideFlashCodeButton = () => ({ type: types.HIDE_FLASH_CODE_BUTTON });

export const actions = {
    showFlashCodeButton,
    hideFlashCodeButton
}
