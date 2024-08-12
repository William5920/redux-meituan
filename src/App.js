import NavBar from './components/NavBar';
import Menu from './components/Menu';
import FoodsCategory from './components/FoodsCategory';
// import Cart from './components/Cart';

import './App.scss';
import { useDispatch } from 'react-redux';
import { fetchFoodsList } from './store/modules/foodsReducer';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);

  // const { foodsList } = useSelector(state => state.foods);

  // 页面结构
  return (
    <div className="home">
      { /* 导航 */ }
      <NavBar />
      
      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />
          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              <FoodsCategory />
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
