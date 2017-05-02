export const types = {
    ENABLE_FULL_SCREEN: 'LIGHTBOX/ENABLE_FULL_SCREEN',
    DISABLE_FULL_SCREEN: 'LIGHTBOX/DISABLE_FULL_SCREEN', 
    OPEN_LIGHTBOX: 'LIGHTBOX/OPEN',
    CLOSE_LIGHTBOX: 'LIGHTBOX/CLOSE',
    TOGGLE_FULL_SCREEN_LIGHTBOX: 'LIGHTBOX/TOGGLE_FULL_SCREEN',
    IMAGE_LOADED_IN_LIGHTBOX: 'LIGHTBOX/IMAGE_LOADED',
    IMAGE_LOADING_START_IN_LIGHTBOX: 'LIGHTBOX/IMAGE_LOADING_START'
}

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

const enableFullScreen = () => ({ type: types.ENABLE_FULL_SCREEN });
const openLightbox = () => ({ type: types.OPEN_LIGHTBOX });
const closeLightbox = () => ({ type: types.CLOSE_LIGHTBOX });
const disableFullScreen = () => ({ type: types.DISABLE_FULL_SCREEN });
const imageLoadedInLightbox = () => ({ type: types.IMAGE_LOADED_IN_LIGHTBOX });
const imageLoadingStartInLightbox = () => ({ type: types.IMAGE_LOADING_START_IN_LIGHTBOX });

export const actions = {
    enableFullScreen,
    openLightbox,
    closeLightbox,
    disableFullScreen,
    imageLoadedInLightbox,
    imageLoadingStartInLightbox
};
