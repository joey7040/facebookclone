import React from 'react'
import { Avatar} from '@material-ui/core';
import '../css/sideBarRow.css'

function SidebarRow({src, Icon, title}) {
    return (
        <div className="sideBarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon/>}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
