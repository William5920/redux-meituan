
import Count from '../Count'
import './index.scss'

const Cart = () => {
  
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={'cartOverlay visible'}
      />
      <div className="cart">
        {/* fill 添加fill类名购物车高亮*/}
        {/* 购物车数量 */}
        <div className={'icon fill'}>
        <div className="cartCornerMark">5</div>
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              200
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        
          <div className="goToPreview">去结算</div>
        
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={'cartPanel visible'}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart">
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          <div className="cartItem">
            <img className="shopPic" src="https://zqran.gitee.io/images/waimai/8078956697.jpg" alt="" />
            <div className="main">
              <div className="skuInfo">
                <div className="name">哈哈</div>
              </div>
              <div className="payableAmount">
                <span className="yuan">¥</span>
                <span className="price">10</span>
              </div>
            </div>
            <div className="skuBtnWrapper btnGroup">
              {/* 数量组件 */}
              <Count />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
