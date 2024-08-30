import AntDesign from '@expo/vector-icons/AntDesign';

export default function CheckStatus ({statusUser}){
    return(
        statusUser ? (
            <AntDesign name="check" size={24} color="green" />
        ):(
            <AntDesign name="close" size={24} color="red" />
        )
    )
}