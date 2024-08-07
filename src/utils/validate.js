import Yup from 'yup';

const schema = Yup.object().shape({
    name:Yup.string()
        .min(2,"error")
})

export default schema;