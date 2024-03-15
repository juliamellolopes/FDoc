import navigationConfig from '@/configs/navigation.config'
import AuthorityCheck from '@/components/shared/AuthorityCheck'
import HorizontalMenuItem from './HorizontalMenuItem'
import {
    NAV_ITEM_TYPE_ITEM
} from '@/constants/navigation.constant'
import { useTranslation } from 'react-i18next'
import type { NavMode } from '@/@types/theme'

type HorizontalMenuContentProps = {
    manuVariant: NavMode
    userAuthority?: string[]
}

const HorizontalMenuContent = ({
    manuVariant,
    userAuthority = [],
}: HorizontalMenuContentProps) => {
    const { t } = useTranslation()

    return (
        <span className="flex items-center">
            {navigationConfig.map((nav) => {
                // Verifique se o item de navegação é do tipo 'item' e se não tem submenus
                if (nav.type === NAV_ITEM_TYPE_ITEM && !nav.subMenu) {
                    return (
                        <AuthorityCheck
                            key={nav.key}
                            authority={nav.authority}
                            userAuthority={userAuthority}
                        >
                            <HorizontalMenuItem
                                isLink
                                nav={nav}
                                manuVariant={manuVariant}
                            />
                        </AuthorityCheck>
                    )
                }
                return null; 
            })}
        </span>
    )
}

export default HorizontalMenuContent
