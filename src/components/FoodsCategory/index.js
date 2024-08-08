import FoodItem from './FoodItem'
import './index.scss'

const FoodsCategory = () => {
  return (
    <div className="category">
      <dl className="cate-list">
        <dt className="cate-title">一人套餐</dt>

        <FoodItem />
      </dl>
    </div>
  )
}

export default FoodsCategory
