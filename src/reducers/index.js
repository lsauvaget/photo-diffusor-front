import * as actions from '../actions';

const initialState = {
    filmStripOpen: false,
    media: [],
    selectedMedium: null, 
    lightboxFullScreen: false,
    imageLoadedInLightbox: false,
    showFlashCode: false,
    flashCodeLink: 'test',
    flashCodeShortLink: null,
    roomId: null
};

//filmStrip

export default (state = initialState, action) => {
    switch (action.type) {
        //FilmStrip
        case actions.OPEN_FILMSTRIP:
            return {...state, filmStripOpen: true};

        case actions.CLOSE_FILMSTRIP:
            return {...state, filmStripOpen: false};

        case actions.TOGGLE_FILMSTRIP_VISIBILITY:
            return {...state, filmStripOpen: !state.filmStripOpen};



        //Gallery
        case actions.RECEIVE_MEDIA:
            return {...state, media: [...state.media, ...action.media]}

        case actions.SELECT_MEDIUM:
            return {...state, selectedMedium: action.selectedMedium};



        //Lightbox
        case actions.CLOSE_LIGHTBOX:
            return {...state, selectedMedium: null, lightboxFullScreen: false};

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


        //FlashCode
        case actions.SHOW_FLASH_CODE:
            return {...state, showFlashCode: true};

        case actions.CLOSE_FLASH_CODE:
            return {...state, showFlashCode: false};

        case actions.RECEIVE_ROOM_ID:
            return {...state, roomId: action.roomId};

        case actions.RECEIVE_SHORT_LINK:
            return {...state, flashCodeShortLink: action.flashCodeShortLink};

        default:
            return state;
    }
}
