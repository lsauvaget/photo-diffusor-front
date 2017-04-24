const CLOSE_WELCOME_POPIN = 'WELCOME_POPIN/CLOSE';
const OPEN_WELCOME_POPIN = 'WELCOME_POPIN/OPEN';

export default (state={open: true}, action) => {
    switch (action.type) {
        case CLOSE_WELCOME_POPIN:
            return {
                ...state, 
                open: false
            };

        case OPEN_WELCOME_POPIN:
            return {
                ...state,
                open: true
            };
        default:
            return state;
    }
}

export const closeWelcomePopin = () => ({
    type: CLOSE_WELCOME_POPIN
});

export const openWelcomePopin = () => ({
    type: CLOSE_WELCOME_POPIN
});
