import { OPEN_MENU } from "./actionsTypes";

const menuListReducer = (state = false, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return action.value;
    
        default:
            return state;
    }
}

export default menuListReducer;