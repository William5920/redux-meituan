
import './index.scss';

const Foods = () => {
  return (
    <dd className="cate-goods">
      <div className="goods-img-wrap">
        <img src="https://zqran.gitee.io/images/waimai/8078956697.jpg" alt="" className="goods-img" />
      </div>
      <div className="goods-info">
        <div className="goods-desc">
          <div className="goods-title">{'羊肉串'}</div>
          <div className="goods-detail">
            <div className="goods-unit">{'串'}</div>
            <div className="goods-detail-text">{'好吃的羊肉串'}</div>
          </div>
          <div className="goods-tag">美味</div>
          <div className="goods-sales-volume">
            <span className="goods-num">月售50</span>
            <span className="goods-num">50%</span>
          </div>
        </div>
        <div className="goods-price-count">
          <div className="goods-price">
            <span className="goods-price-unit">¥</span>
            8
          </div>
          <div className="goods-count">
            {/* 添加商品 */}
            <span className="plus"></span>
          </div>
        </div>
      </div>
    </dd>
  )
}

export default Foods
