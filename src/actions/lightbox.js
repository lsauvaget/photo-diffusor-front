export const ENABLE_FULL_SCREEN = 'ENABLE_FULL_SCREEN';
export const DISABLE_FULL_SCREEN = 'DISABLE_FULL_SCREEN'; 
export const TOGGLE_FULL_SCREEN = 'TOGGLE_FULL_SCREEN'; 
export const CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';
export const LOAD_NEXT_IMAGE = 'LOAD_NEXT_IMAGE';
export const LOAD_PREV_IMAGE = 'LOAD_PREV_IMAGE';
export const TOGGLE_FULL_SCREEN_LIGHTBOX = 'TOGGLE_FULL_SCREEN_LIGHTBOX';
export const IMAGE_LOADED_IN_LIGHTBOX = 'IMAGE_LOADED_IN_LIGHTBOX';
export const IMAGE_LOADING_START_IN_LIGHTBOX = 'IMAGE_LOADING_START_IN_LIGHTBOX';

export const closeLightbox = () => ({
    type: CLOSE_LIGHTBOX
});

export const loadNextMedium = () => ({
    type: LOAD_NEXT_IMAGE
});

export const loadPrevMedium = () => ({
    type: LOAD_PREV_IMAGE
});

export const imageLoadedInLightbox = () => ({
    type: IMAGE_LOADED_IN_LIGHTBOX
});

export const imageLoadingStartInLightbox = () => ({
    type: IMAGE_LOADING_START_IN_LIGHTBOX
});

export const toggleFullScreen = () => ({
    type: TOGGLE_FULL_SCREEN_LIGHTBOX
});
