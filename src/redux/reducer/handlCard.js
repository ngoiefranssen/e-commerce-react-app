
const card = []

//

const handleCard = (state=card, action) =>{
    const product = action.payload;

    switch (action.type) {
        case 'ADDITEM':
            //check if product is already exist
            const exist = state.find((f) => f.id === product.id);

            if(exist)
            {
                // increase the quantity
                return state.map((f) => 
                        f.id  === product.id ? {...f, qty: f.qty + 1} : f
                );
            }else{
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty : 1,
                    }
                ]
            };
            
            break;

            case 'DELETEITEM':
                const exist1 = state.find((f) => f.id === product.id);

                if(exist1.qty === 1){
                    return state.map((f) => xdescribe.id === product.id ? {...f, qty: f.qty-1} : f);
                }

                break;
    
        default:
            break;
    }

}