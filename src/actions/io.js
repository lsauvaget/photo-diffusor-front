export const IO_LOAD_NEXT_MEDIUM = 'IO/LOAD_NEXT_MEDIUM';
export const IO_LOAD_PREV_MEDIUM = 'IO/LOAD_PREV_MEDIUM';
export const IO_SELECT_MEDIUM = 'IO/SELECT_MEDIUM';
export const IO_JOIN_ROOM = 'IO/JOIN_ROOM';

export const ioLoadNextMedium = () => ({
    type: IO_LOAD_NEXT_MEDIUM
});

export const ioLoadPrevMedium = () => ({
    type: IO_LOAD_PREV_MEDIUM
});

export const ioSelectMedium = () => ({
    type: IO_SELECT_MEDIUM
});

export const ioJoinRoom = () => ({
    type: IO_JOIN_ROOM
});
