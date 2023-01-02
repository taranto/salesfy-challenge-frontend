import React from 'react';
import { historyBoxArray, itensLength } from '../store/converter-reducer/selectors';
import { connect } from 'react-redux';

function HistoryMap(props) {
    const { historyBoxArray, inputItens } = props
    return (
        <div className='convertedNumbers'>
            {
                historyBoxArray.map((item, ind) => {
                    if (inputItens.findIndex((val) => val === inputItens.length) === ind) {
                        return <span className='true' key={ind}>{item}</span>
                    } else {
                        return <span className='false' key={ind}>{item}</span>
                    }
                })
            }
        </div>
    );
}


const mapStateToProps = state => ({
    inputItens: state.inputItens.arrayValues,
    historyBoxArray: historyBoxArray(state),
    itensLength: itensLength(state)
});

export default connect(mapStateToProps)(HistoryMap);
