import React from 'react';
import './listcreator.less';

const ListCreator = ({selectList, index}) => {

    //validate url here but do not diable input, red color and message

    return (
    
    <div className={"column-5"}>
        <select className={"listinput"} onChange={(e)=>selectList(index, e.target.value)}>
            <option value="none">None</option>
            <option value="open_issues">open_issues</option>
            <option value="archived">archived</option>
            <option value="default_branch">default_branch</option>
            <option value="disabled">disabled</option>
            <option value="id">id</option>
            <option value="owner">owner</option>
        </select>
        </div>
    )
}

export default ListCreator;