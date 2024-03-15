import { useState } from 'react'
import classNames from 'classnames'
import NavToggle from '@/components/shared/NavToggle'
import { useAppSelector } from '@/store'
import useResponsive from '@/utils/hooks/useResponsive'

type MobileNavToggleProps = {
    toggled?: boolean
}

const MobileNavToggle = ({ toggled }: MobileNavToggleProps) => {
    return (
        <div className="text-2xl">
            <NavToggle toggled={toggled} />
        </div>
    )
}

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = () => {
        setIsOpen(false)
    }

    const smaller = useResponsive().smaller
    const navMode = useAppSelector(state => state.theme.navMode)

    return (
        <>
            {smaller.md && (
                <>
                    <div className="text-2xl" onClick={openDrawer}>
                        <MobileNavToggle toggled={isOpen} />
                    </div>
                </>
            )}
        </>
    )
}

export default MobileNav
