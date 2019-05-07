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

export default function customerReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        default:
            return state;
    }
}