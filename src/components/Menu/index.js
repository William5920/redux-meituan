
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveIndex } from '../../store/modules/foodsReducer';
import classNames from 'classnames';

const Menu = () => {
  const { foodsList, activeIndex } = useSelector(state => state.foods);
  const dispatch = useDispatch();

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      { foodsList.map((item, index) => {
        return (
          <div
            key={ item.tag }
            className={classNames(
              'list-menu-item',
              index === activeIndex && 'active'
            )}
            // 提交action切换激活index
            onClick={() => dispatch(changeActiveIndex(index))}
          >{ item.name }</div>
        )
      }) }
    </nav>
  )
};

export default Menu;
