import actions from '../actions';

const initialState = {
    filmStripOpen: false,
    media: [],
    selectedMedium: null, 
    lightboxFullScreen: false,
    imageLoadedInLightbox: false
};

//filmStrip

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.OPEN_FILMSTRIP:
            return {...state, filmStripOpen: true};

        case actions.CLOSE_FILMSTRIP:
            return {...state, filmStripOpen: false};

        case actions.TOGGLE_FILMSTRIP_VISIBILITY:
            return {...state, filmStripOpen: !state.filmStripOpen};

        case actions.SELECT_MEDIUM:
            return {...state, selectedMedium: action.selectedMedium};

        case actions.CLOSE_LIGHTBOX:
            return {...state, selectedMedium: null};

        case actions.TOGGLE_FULL_SCREEN_LIGHTBOX:
            return {...state, lightboxFullScreen: !state.lightboxFullScreen}

        case actions.ENABLE_FULL_SCREEN:
            return {...state, lightboxFullScreen: true};

        case actions.DISABLE_FULL_SCREEN: 
            return {...state, lightboxFullScreen: false};

        case actions.TOGGLE_FULL_SCREEN: 
            return {...state, lightboxFullScreen: !state.fullScreen};

        case actions.IMAGE_LOADED_IN_LIGHTBOX: 
            return {...state, imageLoadedInLightbox: true};

        case actions.IMAGE_LOADING_START_IN_LIGHTBOX: 
            return {...state, imageLoadedInLightbox: false};

        case actions.LOAD_NEXT_IMAGE:
            {
                const idx = state.media.indexOf(state.selectedMedium);
                return {...state, selectedMedium: idx < state.media.length - 1 ? state.media[idx + 1] : state.media[0]};
            }
        case actions.LOAD_PREV_IMAGE:
            {
                const idx = state.media.indexOf(state.selectedMedium);
                return {...state, selectedMedium: idx - 1 > 0 ? state.media[idx - 1] : state.media[state.media.length - 1]};
            }

        case actions.RECEIVE_MEDIA:
            return {...state, media: [...state.media, ...action.media]}
        default:
            return state;
    }
}
