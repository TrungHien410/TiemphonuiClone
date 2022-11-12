import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './HeaderStyles.module.scss'
import logo from '../../assest/Logo.png.avif'
import Nav from './Nav';
import BtnActions from './BtnAction';
import BtnBar from './BtnBar';
import ModalSearch from './ModalSearch';

let cx = classNames.bind(styles);

function Header(props) {
    const [activeBtnBar, setActiveBtnBar] = useState(false)
    const [activeSubMenu, setActiveSubMenu] = useState(false)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('modal-search')}>
                    <ModalSearch />
                </div>
                <div className={cx('btn-bar')}>
                    <BtnBar
                        setActiveBtnBar={setActiveBtnBar}
                        activeBtnBar={activeBtnBar}
                        setActiveSubMenu={setActiveSubMenu}
                        activeSubMenu={activeSubMenu}
                    />
                </div>
                <div className={cx('logo')}>
                    <img src={logo} alt='logo' />
                </div>

                <div className={cx('navbar', { activeBtnBar })}>
                    <Nav activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} />
                </div>
                <div className={cx('btn-action')}>
                    <BtnActions />
                </div>
            </div>
        </div>
    );
}

export default Header;