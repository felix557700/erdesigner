const ACTION = {
    REDUX_INIT: '@@redux/INIT',
    SELECT_NODE: 'SELECT_NODE',
    CONNECT_NODE: 'CONNECT_NODE',
    START_DRAWING: 'START_DRAWING',
    STOP_DRAWING: 'STOP_DRAWING',
    DELETE_NODE: 'DELETE_NODE',
    DELETE_ALL_NODES: 'DELETE_ALL_NODES',
    ADD_CONNECTION: 'ADD_CONNECTION',
    UPDATE_CONNECTIONS: 'UPDATE_CONNECTIONS',
    ADD_NODE: 'ADD_NODE',
    UPDATE_NODE: 'UPDATE_NODE',
    NODE_CHANGE_NAME: 'NODE_CHANGE_NAME',
    NODE_ADD_COLOR: 'NODE_ADD_COLOR',
    NODE_REMOVE_COLOR: 'NODE_REMOVE_COLOR',
    NODE_SELECT: 'NODE_SELECT',
    NODE_DESELECT: 'NODE_DESELECT',
    NODE_RESIZE_DONE: 'NODE_RESIZE_DONE',
    ZOOM_NORMAL: 'ZOOM_NORMAL',
    ZOOM_IN: 'ZOOM_IN',
    ZOOM_OUT: 'ZOOM_OUT',
    IMPORT: 'IMPORT',
    NODE_TO_FRONT: 'NODE_TO_FRONT',
    NODE_TO_BACK: 'NODE_TO_BACK',
    MOVE_CANVAS: 'MOVE_CANVAS',
    ADD_ATTRIBUTE: 'ADD_ATTRIBUTE',
    DELETE_ATTRIBUTE: 'DELETE_ATTRIBUTE',
    UNDO: 'UNDO',
    REDO: 'REDO'
}

export { ACTION }
