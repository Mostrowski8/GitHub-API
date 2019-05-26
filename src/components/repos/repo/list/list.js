import React from 'react';
import {parseValue} from '../../../../helper-functions';

const List = ({list, repo}) => {



    return (
       <ul>
            {list[0]!=="none" && <li>{list[0]}: {parseValue(repo[list[0]])}</li>}
            {list[1]!=="none" && <li>{list[1]}: {parseValue(repo[list[1]])}</li>}
            {list[2]!=="none" && <li>{list[2]}: {parseValue(repo[list[2]])}</li>}
            {list[3]!=="none" && <li>{list[3]}: {parseValue(repo[list[3]])}</li>}
            {list[4]!=="none" && <li>{list[4]}: {parseValue(repo[list[4]])}</li>}
        </ul>
        
    )
}

export default List;