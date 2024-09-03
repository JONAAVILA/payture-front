import { useSelector } from "react-redux";

export default function StateUser (prop){
    const state = useSelector(state => state.user[prop])
    return state
}