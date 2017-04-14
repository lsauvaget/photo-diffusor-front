export const ENABLE_FULL_SCREEN = 'ENABLE_FULL_SCREEN';
export const DISABLE_FULL_SCREEN = 'DISABLE_FULL_SCREEN'; 
export const OPEN_LIGHTBOX = 'OPEN_LIGHTBOX';
export const CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';
export const TOGGLE_FULL_SCREEN_LIGHTBOX = 'TOGGLE_FULL_SCREEN_LIGHTBOX';
export const IMAGE_LOADED_IN_LIGHTBOX = 'IMAGE_LOADED_IN_LIGHTBOX';
export const IMAGE_LOADING_START_IN_LIGHTBOX = 'IMAGE_LOADING_START_IN_LIGHTBOX';

export const enableFullScreen = () => ({ type: ENABLE_FULL_SCREEN });
export const openLightbox = () => ({ type: OPEN_LIGHTBOX });
export const closeLightbox = () => ({ type: CLOSE_LIGHTBOX });
export const disableFullScreen = () => ({ type: DISABLE_FULL_SCREEN });
export const imageLoadedInLightbox = () => ({ type: IMAGE_LOADED_IN_LIGHTBOX });
export const imageLoadingStartInLightbox = () => ({ type: IMAGE_LOADING_START_IN_LIGHTBOX });
