import { useSelector } from "react-redux";

export default function StateUser (prop){
    const state = useSelector(state => prop ? state.user[prop] : state.user)
    return state
}