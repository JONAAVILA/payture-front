import AntDesign from '@expo/vector-icons/AntDesign';

export default function CheckStatus ({statusUser}){
    if(statusUser){
        return(
            <>
            <AntDesign name="check" size={24} color="green" />
            </>
        )
    }
    if(!statusUser){
        return(
            <>
            <AntDesign name="close" size={24} color="red" />
            </>
        )
    }
}