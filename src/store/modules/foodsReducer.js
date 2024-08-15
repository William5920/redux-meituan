import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        foodsList: [],
        activeIndex: 0,
        cartList: [] // 购物车列表
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload;
        },
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload;
        },
        // 添加购物车
        addCart(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id);
            if (item) {
                item.count++;
            }
            else {
                state.cartList.push(action.payload);
            }
        },
        increaseCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id);
            item.count++;
        },
        decreaseCount(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id);
            if (item.count === 0) {
                return;
            }
            item.count--;
        }, 
        clearCart(state) {
            state.cartList = [];
        }
    }
});

// 异步获取数据
const { setFoodsList, changeActiveIndex, addCart, increaseCount, decreaseCount, clearCart } = foodsStore.actions;
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway');
        dispatch(setFoodsList(res.data));
    }
};

export { fetchFoodsList, changeActiveIndex, addCart, increaseCount, decreaseCount, clearCart };
const foodsReducer = foodsStore.reducer;
export default foodsReducer;