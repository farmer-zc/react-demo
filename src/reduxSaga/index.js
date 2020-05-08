import React, {useState} from 'react'
import { connect } from 'react-redux'
import { add, sub, asyncAdd } from './store/count.reducer'

const mapStateToProps = state => ({
    count: state.COUNT.count
})

const mapDispathToProps = {
    add,
    sub,
    asyncAdd
}

function Count({count, add, sub, asyncAdd}) {
    const [val, setVal] = useState(1);
    return (
        <div>
            <p>count： {count}</p>
            <input value={val} onChange={ e => setVal(e.target.value)} />
            <button onClick={() => add(val)}>加法</button>
            <button onClick={() => sub(val)}>减法</button>
            <button onClick={() => asyncAdd(val)}>异步加法</button>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Count)