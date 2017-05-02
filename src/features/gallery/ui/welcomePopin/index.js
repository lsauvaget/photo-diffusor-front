export const types = {
    CLOSE_WELCOME_POPIN: 'WELCOME_POPIN/CLOSE',
    OPEN_WELCOME_POPIN: 'WELCOME_POPIN/OPEN'
}

export default (state={open: true}, action) => {
    switch (action.type) {
        case types.CLOSE_WELCOME_POPIN:
            return {
                ...state, 
                open: false
            };

        case types.OPEN_WELCOME_POPIN:
            return {
                ...state,
                open: true
            };
        default:
            return state;
    }
}

const closeWelcomePopin = () => ({
    type: types.CLOSE_WELCOME_POPIN
});

const openWelcomePopin = () => ({
    type: types.CLOSE_WELCOME_POPIN
});

export const actions = {
    closeWelcomePopin,
    openWelcomePopin
}
