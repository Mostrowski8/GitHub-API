import React from 'react';
import {parseValue} from '../../../../helper-functions';
import './list.less';

const List = ({list, repo}) => {



    return (
        <div className={"itemsList"}>
            <h4>Items list</h4>
            <div className={"listcontainer"}>
            {list[0]!=="none" && <div className={"row listitem"}><div className={"text-right label column-2"}>{list[0]}:&nbsp;</div><div className={"text-left column-2"}>{parseValue(repo[list[0]])}</div></div>}
            {list[1]!=="none" && <div className={"row listitem"}><div className={"text-right label column-2"}>{list[1]}:&nbsp;</div><div className={"text-left column-2"}>{parseValue(repo[list[1]])}</div></div>}
            {list[2]!=="none" && <div className={"row listitem"}><div className={"text-right label column-2"}>{list[2]}:&nbsp;</div><div className={"text-left column-2"}>{parseValue(repo[list[2]])}</div></div>}
            {list[3]!=="none" && <div className={"row listitem"}><div className={"text-right label column-2"}>{list[3]}:&nbsp;</div><div className={"text-left column-2"}>{parseValue(repo[list[3]])}</div></div>}
            {list[4]!=="none" && <div className={"row listitem"}><div className={"text-right label column-2"}>{list[4]}:&nbsp;</div><div className={"text-left column-2"}>{parseValue(repo[list[4]])}</div></div>}
            </div>
        </div>  
    )
}

export default List;