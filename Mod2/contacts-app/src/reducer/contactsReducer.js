

// store all the state logic

/**
 * @description Store all the state logic
 * @param {*} state: current state
 * @param {*} action : objects with the type and payload
 * @returns 
 */
export default function contactsReducer(state, action) {
    const {type, payload } = action;
    console.log(type);
    console.log(payload);

    switch(type) {

        // returning a new state with the data from the api
        case 'fetched_data':
            return [
                ...payload
            ];

        case 'add_contact':
            return [
                ...state,
                payload
            ];

        case 'delete_contact':
            const copyState = [...state];
            const newArr = copyState.filter(item => item.id !== payload);
            return [
                ...newArr
            ];
        default:
            return []
    }
}