import classNames from 'classnames'
import { HiOutlineCog } from 'react-icons/hi'
import { setPanelExpand, useAppDispatch } from '@/store'
import { Link } from 'react-router-dom';


const SidePanel = () => {
    const dispatch = useAppDispatch()

    const openPanel = () => {
        dispatch(setPanelExpand(true))
    }

    return (
        <Link to="/settings" >
            <div className={classNames('text-2xl')} onClick={openPanel}>
                <HiOutlineCog />
            </div>
        </Link>
    )
}

export default SidePanel
