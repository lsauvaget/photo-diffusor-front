import * as actions from '../actions';

const initialState = {
    open: false,
    fullScreen: false,
    imageLoaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.OPEN_LIGHTBOX:
            return {...state, open: true, fullScreen: false};

        case actions.CLOSE_LIGHTBOX:
            return {...state, open: false, fullScreen: false};

        case actions.TOGGLE_FULL_SCREEN_LIGHTBOX:
            return { ...state, fullScreen: !state.fullScreen }

        case actions.ENABLE_FULL_SCREEN:
            return { ...state, fullScreen: true };

        case actions.DISABLE_FULL_SCREEN: 
            return { ...state, fullScreen: false };

        case actions.IMAGE_LOADED_IN_LIGHTBOX: 
            return {...state, imageLoaded: true};

        case actions.IMAGE_LOADING_START_IN_LIGHTBOX: 
            return {...state, imageLoaded: false};
        default:
            return state;
    }
}
