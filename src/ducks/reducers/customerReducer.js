const initialState = {
    firstname: '',
    lastname: '',
    company: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    hAddy: '',
    hCity: '',
    hState: '',
    hZipCode: '',
    hCountry: '',
    bAddy: '',
    bCity: '',
    bState: '',
    bZipCode: '',
    bCountry: '',
    cardNumber: '',
    expire: '',
    code: ''
}

const PERSONAL_INFO = 'PERSONAL_INFO';
const SHIPPING_INFO = 'SHIPPING_INFO';
const BILLING_INFO = 'BILLING_INFO';

export function personalInfo(obj){
    return {
        type: PERSONAL_INFO,
        payload: obj
    }
}

export function shippingInfo(obj) {
    return {
        type: SHIPPING_INFO,
        payload: obj
    }
}

export function billingInfo(obj) {
    return {
        type: BILLING_INFO,
        payload: obj
    }
}

export default function customerReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case PERSONAL_INFO:
            const { firstname, lastname, company, homePhone, mobilePhone, email } = payload
            console.log('personalInfo redux', payload)
            return { ...state, firstname, lastname, company, homePhone, mobilePhone, email }
        case SHIPPING_INFO:
            const {hAddy, hCity, hState, hZipcode, hCountry} = payload
            return { ...state, hAddy, hCity, hState, hZipcode, hCountry}
        case BILLING_INFO:
            const { bAddy, bCity, bState, bZipCode, bCountry, cardNumber, expire, code } = payload
            return { ...state, bAddy, bCity, bState, bZipCode, bCountry, cardNumber, expire, code }
        default:
            return state;
    }
}