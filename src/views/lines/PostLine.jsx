import { ScrollView } from "moti";
import Publications from "../../components/cards/publications/Publications";

import image from '../../../assets/image.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'

export default function PostLine (){
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <Publications image={image} />
            <Publications image={image2} />
            <Publications image={image3} />
            <Publications image={image} />
        </ScrollView>
    )
}