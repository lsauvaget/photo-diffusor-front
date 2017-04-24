const ENABLE_FULL_SCREEN = 'ENABLE_FULL_SCREEN';
const DISABLE_FULL_SCREEN = 'DISABLE_FULL_SCREEN'; 
const OPEN_LIGHTBOX = 'OPEN_LIGHTBOX';
const CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';
const TOGGLE_FULL_SCREEN_LIGHTBOX = 'TOGGLE_FULL_SCREEN_LIGHTBOX';
const IMAGE_LOADED_IN_LIGHTBOX = 'IMAGE_LOADED_IN_LIGHTBOX';
const IMAGE_LOADING_START_IN_LIGHTBOX = 'IMAGE_LOADING_START_IN_LIGHTBOX';


export const enableFullScreen = () => ({ type: ENABLE_FULL_SCREEN });
export const openLightbox = () => ({ type: OPEN_LIGHTBOX });
export const closeLightbox = () => ({ type: CLOSE_LIGHTBOX });
export const disableFullScreen = () => ({ type: DISABLE_FULL_SCREEN });
export const imageLoadedInLightbox = () => ({ type: IMAGE_LOADED_IN_LIGHTBOX });
export const imageLoadingStartInLightbox = () => ({ type: IMAGE_LOADING_START_IN_LIGHTBOX });

const initialState = {
    open: false,
    fullScreen: false,
    imageLoaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_LIGHTBOX:
            return {...state, open: true, fullScreen: false};

        case CLOSE_LIGHTBOX:
            return {...state, open: false, fullScreen: false};

        case TOGGLE_FULL_SCREEN_LIGHTBOX:
            return { ...state, fullScreen: !state.fullScreen }

        case ENABLE_FULL_SCREEN:
            return { ...state, fullScreen: true };

        case DISABLE_FULL_SCREEN: 
            return { ...state, fullScreen: false };

        case IMAGE_LOADED_IN_LIGHTBOX: 
            return {...state, imageLoaded: true};

        case IMAGE_LOADING_START_IN_LIGHTBOX: 
            return {...state, imageLoaded: false};
        default:
            return state;
    }
}

