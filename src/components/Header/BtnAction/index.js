import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSuitcase } from "@fortawesome/free-solid-svg-icons";

import styles from './BtnActionsStyles.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function BtnActions(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon-search')}>
                <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
            </div>
            <div className={cx('icon-bag')}>
                <FontAwesomeIcon className={cx('icon')} icon={faSuitcase} />
            </div>
        </div>
    )
}

export default BtnActions