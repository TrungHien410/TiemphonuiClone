

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './NavStyles.module.scss'
import SubMenuProduct from './SubMenuProduct';

let cx = classNames.bind(styles);

function Nav(props) {
    const { activeSubMenu, setActiveSubMenu } = props
    const handleEventClickSubMenu = (e) => {
        setActiveSubMenu(!activeSubMenu)
    }
    return (
        <ul className={cx('wrapper')}>
            <li className={cx('nav-item')}>
                <a href="/#">Trang chủ</a>
            </li>
            <li
                onClick={(e) => handleEventClickSubMenu(e)}
                className={cx('nav-item')}>
                <a className={cx('btn-product')} href="/#">
                    Sản phẩm
                    <FontAwesomeIcon className={cx('icon-arrow')} icon={faAngleDown} />
                </a>
            </li>
            <li className={cx('nav-item')}>
                <a href="/#">Đang ký đại lý</a>
            </li>
            <li className={cx('nav-item')}>
                <a href="/#">Liên hệ</a>
            </li>
            <div className={cx('sub-menu', { activeSubMenu })}>
                <SubMenuProduct activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} />
            </div>
        </ul>
    )
}

export default Nav