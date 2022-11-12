import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './SubMenuProduct.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const listSubMenu = [
    {
        title: 'Tất Cả Các Sản Phẩm'
    },
    {
        title: 'Mật Ong'
    },
    {
        title: 'Hạt Dinh Dưỡng'
    },
    {
        title: 'Bánh Dinh Dưỡng'
    },
    {
        title: 'Nông Sản Khác'
    },
    {
        title: 'Combo'
    }
]
function SubMenuProduct(props) {
    const { setActiveSubMenu } = props
    return (
        <ul className={cx('wrapper')}>
            <li
                onClick={() => setActiveSubMenu(false)}
                className={cx('btn-back')}
            >
                <p>
                    <FontAwesomeIcon className={cx('icon-back')} icon={faArrowLeft} />
                    Sản Phẩm
                </p>
            </li>
            {
                listSubMenu && listSubMenu.length > 0 &&
                listSubMenu.map((item, index) => {
                    return (
                        <li key={index}>
                            <p className={cx('subMenu-item')}>{item.title}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SubMenuProduct