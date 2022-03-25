import { ON_MOUSE_HOVER } from "./actionTypes";

export const onMouseHover = (id)=>{
    return {
        type:ON_MOUSE_HOVER,
        payload:id
    }
}