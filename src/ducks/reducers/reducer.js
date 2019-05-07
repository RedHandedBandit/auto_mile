const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
    phone: '',
    image: ''
}

const EMPLOYEE = 'EMPLOYEE';

export function employee(obj) {
    return {
        type: EMPLOYEE,
        payload: obj
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case EMPLOYEE:
            const { firstname, lastname, email, password, username, phone } = payload
            return { ...state, firstname, lastname, email, password, username, phone}
        default: 
            return state;
    }
}