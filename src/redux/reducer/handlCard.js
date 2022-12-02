
const cart = []

//

const handleCard = (state = cart, action) => {

    const product = action.payload;

    switch (action.type) {
        case 'ADDITEM':
            //check if product is already exist
            const exist = state.find((f) => f.id === product.id);

            if (exist) {
                // increase the quantity
                return state.map((f) =>
                    f.id === product.id ? { ...f, qty: f.qty + 1 } : f
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            };

            break;

        case 'DELETEITEM':

            const _exist = state.find((f) => f.id === product.id);

            if (_exist.qty === 1) {
                return state.filter((f) => f.id !== _exist.id);
            } else {
                return state.map((f) => f.id === product.id ? { ...f, qty: f.qty - 1 } : f);
            }

            break;

        default:
            return state;
            break;
    }

};

export default handleCard;