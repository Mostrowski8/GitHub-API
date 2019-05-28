import React from 'react';
import './listcreator.less';
import {connect} from 'react-redux';

const ListCreator = ({selectList, index, listitems}) => {

let listCreatorItems = listitems.map((item)=>{return <option key={item} value={item}>{item}</option>});

    return (
    
    <div className={"column-5"}>
        <select className={"listinput"} onChange={(e)=>selectList(index, e.target.value)}>
            <option value="none">None</option>
            {listCreatorItems}
        </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listitems: state.listitems
    }
  }


export default connect(mapStateToProps)(ListCreator);