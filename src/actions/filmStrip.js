export const OPEN_FILMSTRIP = 'OPEN_FILMSTRIP';
export const CLOSE_FILMSTRIP = 'CLOSE_FILMSTRIP';
export const SHOW_FILMSTRIP_BUTTON = 'SHOW_FILMSTRIP_BUTTON';
export const HIDE_FILMSTRIP_BUTTON = 'CLOSE_FILMSTRIP_BUTTON';

export const openFilmStrip = () => ({
    type: OPEN_FILMSTRIP
});

export const closeFilmStrip = () => ({
    type: CLOSE_FILMSTRIP
});

export const showFilmStripButton = () => ({
    type: SHOW_FILMSTRIP_BUTTON
});

export const hideFilmStripButton = () => ({
    type: HIDE_FILMSTRIP_BUTTON
});
