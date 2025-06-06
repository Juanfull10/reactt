import { useState } from "react";

export const useForm = (initialForm={}) => {
 
    const [formState, setFormState] = useState(initialForm);


    const onInputChange= ({target})=>{
        const {name,value}= target;
        setFormState({
            ...formState,
            [name]:value
        });
    }

    const {name,email,password}=formState

    const onResetForm=()=>{
        setFormState(initialForm)
    }
    
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
