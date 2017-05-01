import * as types from './types';

export const enableFullScreen = () => ({ type: types.ENABLE_FULL_SCREEN });
export const openLightbox = () => ({ type: types.OPEN_LIGHTBOX });
export const closeLightbox = () => ({ type: types.CLOSE_LIGHTBOX });
export const disableFullScreen = () => ({ type: types.DISABLE_FULL_SCREEN });
export const imageLoadedInLightbox = () => ({ type: types.IMAGE_LOADED_IN_LIGHTBOX });
export const imageLoadingStartInLightbox = () => ({ type: types.IMAGE_LOADING_START_IN_LIGHTBOX });

const initialState = {
    open: false,
    fullScreen: false,
    imageLoaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_LIGHTBOX:
            return {...state, open: true, fullScreen: false};

        case types.CLOSE_LIGHTBOX:
            return {...state, open: false, fullScreen: false};

        case types.TOGGLE_FULL_SCREEN_LIGHTBOX:
            return { ...state, fullScreen: !state.fullScreen }

        case types.ENABLE_FULL_SCREEN:
            return { ...state, fullScreen: true };

        case types.DISABLE_FULL_SCREEN: 
            return { ...state, fullScreen: false };

        case types.IMAGE_LOADED_IN_LIGHTBOX: 
            return {...state, imageLoaded: true};

        case types.IMAGE_LOADING_START_IN_LIGHTBOX:
            return {...state, imageLoaded: false};
        default:
            return state;
    }
}

