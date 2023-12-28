const INIT_STATE = {
    carts: []
}


export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "add-to-cart":

            // return {
            //     ...state,
            //     carts: [...state.carts, action.payload]
            // }

            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qty += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            }
            else {
                const temp = { ...action.payload, qty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "rmv-cart":

            const deleteData = state.carts.filter((e) => e.id !== action.payload);

            return {
                ...state,
                carts: deleteData
            }

        case "rmv-one":

            const teamindex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[teamindex].qty >1) {
                const dltitem = state.carts[teamindex].qty -= 1
                console.log([...state.carts, dltitem]);
                return {
                    ...state,
                    carts: [...state.carts]
                }
            }

            else if (state.carts[teamindex].qty === 1) {
                const data = state.carts.filter((e) => e.id !== action.payload)
                return {
                    ...state,
                    carts: data
                }
            }

        default:
            return state;

    }
}