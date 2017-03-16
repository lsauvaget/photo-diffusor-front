const initialState = {
    filmStripOpen: false,
    media: [],
    selectedMedium: null, 
    media: [], 
    lightboxFullScreen: false,
    imageLoadedInLightbox: false
};

//filmStrip

export default const reducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_FILMSTRIP:
            return {filmStripOpen: true};

        case CLOSE_FILMSTRIP:
            return {filmStripOpen: false};

        case TOGGLE_FILMSTRIP_VISIBILITY:
            return {filmStripOpen: !state.filmStripOpen};

        case SELECT_MEDIUM:
            return {selectedMedium: action.token.selectedMedium};

        case CLOSE_LIGHTBOX:
            return {selectedMedium: null};

        case TOGGLE_FULL_SCREEN_LIGHTBOX:
            return {lightboxFullScreen: action.token.lightboxFullScreen}

        case ENABLE_FULL_SCREEN:
            return {lightboxFullScreen: true};

        case DISABLE_FULL_SCREEN: 
            return {lightboxFullScreen: false};

        case TOGGLE_FULL_SCREEN: 
            return {lightboxFullScreen: !state.fullScreen};

        case ENABLE_IMAGE_LOADER: 
            return {imageLoadedInLightbox: false};

        case DISABLE_IMAGE_LOADER: 
            return {imageLoadedInLightbox: true};

        case LOAD_NEXT_IMAGE:
            {
                const idx = getIdxOfSelectedMedium(state);
                return {selectedMedium: idx < state.media.length ? state.media[idx + 1] : state.media[0]};
            }
        case LOAD_PREV_IMAGE:
            {
                const idx = getIdxOfSelectedMedium(state);
                return {selectedMedium: idx - 1 > 0 ? state.media[idx - 1] : state.media[state.media.length - 1]};
            }
        default:
            return state;
    }
}

 function getIdxOfSelectedMedium(state) {
    const selectedMedium = state.selectedMedium;
    const media = state.media;
    const idx = media.indexOf(selectedMedium);
    return idx;
};
