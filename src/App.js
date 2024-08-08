import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodsList } from './store/modules/foodsReducer';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);

  const { foodsList } = useSelector(state => state.foods);

  return (
    <div className="App">
      <h1>react app 根组件</h1>
      <ul>
        { foodsList.map(item => <li key={item.name}>{item.name}</li>) }
      </ul>
    </div>
  );
}

export default App;
