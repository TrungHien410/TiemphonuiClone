import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

import classNames from "classnames/bind"
import stylesBtn from './BtnBarStyles.module.scss'

const cx = classNames.bind(stylesBtn)
const style = {
    cursor: 'pointer'
}
function BtnBar(props) {
    const { setActiveBtnBar, activeBtnBar, setActiveSubMenu } = props
    const handleClickBtnBar = () => {
        setActiveBtnBar(!activeBtnBar)
        setActiveSubMenu(false)
    }
    return (
        <div
            onClick={() => handleClickBtnBar()}
            className={cx('wrapper')} style={style}>
            {
                !activeBtnBar ?
                    <FontAwesomeIcon className={cx('icon-bar')} icon={faBars} />
                    :
                    <FontAwesomeIcon className={cx('icon-xmark')} icon={faXmark} />
            }
        </div>
    )
}

export default BtnBar