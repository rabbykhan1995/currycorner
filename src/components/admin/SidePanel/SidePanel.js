import './SidePanel.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { TbMessageFilled } from "react-icons/tb";
import { TfiSettings } from "react-icons/tfi";
import { LiaPeopleCarrySolid } from "react-icons/lia";

const SidePanel = () => {
    return(
        <div className='main'>
            <h1 className='Any'><LuLayoutDashboard /> <span>Dash Board</span></h1>
            <h1 className='Any'><TbMessageFilled /><span>Messages</span></h1>
            <h1 className='Any'><TfiSettings /><span>Customization</span></h1>
            <h1 className='Any'><LiaPeopleCarrySolid /><span>Orders</span></h1>
        </div>
    )
}

export default SidePanel;