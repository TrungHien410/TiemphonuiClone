import classNames from "classnames/bind"
import style from "./ModalSearch.module.scss"

const cx = classNames.bind(style)

function ModalSearch(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('input-search')}>
                <div className={cx('form-floating', 'form')}>
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Tìm Kiếm</label>
                </div>
            </div>
            <div className={cx('outside')}>

            </div>
        </div>
    )
}

export default ModalSearch