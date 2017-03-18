import * as actionsLightbox from './lightbox.js';
import * as actionsGallery from './gallery.js';
import * as actionsFilmStrip from './filmStrip.js';


const RECEIVE_MEDIA = 'RECEIVE_MEDIA';
const receiveMedia = (media) => ({
    type: RECEIVE_MEDIA,
    media
});
export default Object.assign({}, 
    actionsLightbox, 
    actionsGallery, 
    actionsFilmStrip,
    {
        RECEIVE_MEDIA,
        receiveMedia
    }
);

