import './SidePanel.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { TbMessageFilled } from "react-icons/tb";
import { TfiSettings } from "react-icons/tfi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import Link from 'next/link';

const SidePanel = () => {
    return(
        <div className='main'>
            <Link href={`${process.env.NEXT_PUBLIC_FRONTEND_HOST}/admin`} className='Any'><LuLayoutDashboard /> <span>Dash Board</span></Link>
            <h1 className='Any'><TbMessageFilled /><span>Messages</span></h1>
            <Link href={`${process.env.NEXT_PUBLIC_FRONTEND_HOST}/admin/customization`} className='Any'><TfiSettings /><span>Customization</span></Link>
            <Link href={`${process.env.NEXT_PUBLIC_FRONTEND_HOST}/admin/orders`} className='Any'><LiaPeopleCarrySolid /><span>Orders</span></Link>
        </div>
    )
}

export default SidePanel;