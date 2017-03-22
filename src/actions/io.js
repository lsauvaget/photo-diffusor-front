export const IO_SELECT_MEDIUM = 'IO/SELECT_MEDIUM';
export const IO_JOIN_ROOM = 'IO/JOIN_ROOM';

export const ioSelectMedium = (selectedMedium) => ({
    type: IO_SELECT_MEDIUM,
    selectedMedium
});

export const ioJoinRoom = (roomId) => ({
    type: IO_JOIN_ROOM,
    roomId
});
