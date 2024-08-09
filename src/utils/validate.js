import * as Yup from 'yup';

export const validateLogin = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre muy corto")
        .max(50,'Nombre muy largo')
        .required('El nombre es requerido'),
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido')
})

export const validateSingin = Yup.object().shape({
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido')
})

export const validateUser = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre muy corto")
        .max(50,'Nombre muy largo')
        .required('El nombre es requerido'),
    userName:Yup.string()
        .min(5,'El usuario es muy corto')
        .max(50,'El usuario es un largo')
        .required('El usuario es requerido'),
    surname:Yup.string()
        .min(3,"Apellido muy corto")
        .max(50,'Apellido muy largo')
        .required('El Apellido es requerido'),
})  