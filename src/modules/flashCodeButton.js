const SHOW_FLASH_CODE_BUTTON = 'SHOW_FLASH_CODE_BUTTON';
const HIDE_FLASH_CODE_BUTTON = 'HIDE_FLASH_CODE_BUTTON';

const initialState = {
    show: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FLASH_CODE_BUTTON:
            return {...state, show: true};

        case HIDE_FLASH_CODE_BUTTON:
            return {...state, show: false};

        default:
            return state;
    }
}

export const showFlashCodeButton = () => ({
    type: SHOW_FLASH_CODE_BUTTON
});

export const hideFlashCodeButton = () => ({
    type: HIDE_FLASH_CODE_BUTTON
});
