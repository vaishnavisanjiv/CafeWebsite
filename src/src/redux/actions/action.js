
export const ADD = (item) => {
    return{
        type :"add-to-cart",
        payload:item
    }
}


export const DLT =(id)=>{
    return{
        type :"rmv-cart",
        payload:id
    }
}

export const REMOVE =(iteam)=>{
    return{
        type :"rmv-one",
        payload:iteam
    }

}