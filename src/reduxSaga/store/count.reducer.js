const initState = {
    count: 0
}

const countReducer = (state=initState, action) => {
    const {type, val} = action;

    switch(type) {
        case 'ADD':
            return {count: state.count + (val-0) };
        case 'SUB':
            return {count: state.count - val }
        default:
            return state
    }
}

export const add = val => ({type: 'ADD', val})

export const sub = val => ({type: 'SUB', val})

export const asyncAdd = val => ({type: 'asyncAdd', val})

export default countReducer