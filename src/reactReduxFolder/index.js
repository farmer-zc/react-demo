import React, { useState} from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => ({count: state.count})

const mapDispatchToProps = {
    add: payload => ({ type: 'ADD', payload}),
    sub: payload => ({ type: 'SUB', payload})
}
function Count({count, add, sub}) {

    const [value, setValue] = useState(0)

    return (
        <div>
            <p>count: {count}</p>
            <input value={value} onChange={ e => setValue(e.target.value)} />
            <button onClick={() => add(value)}>加法</button>
            <button onClick={() => sub(value)}>减法</button>
        </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Count);