import { useSelector } from "react-redux";

export default function useStateUser (prop){
    const state = useSelector(state => prop ? state.user[prop] : state.user)
    return state
}