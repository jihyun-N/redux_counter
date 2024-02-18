import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 2개의 INPUT
// (1) 이름 : 의미는 크게 없음
// (2) 함수
export const __plus = createAsyncThunk(
  // 이름
  "PLUS",
  // 함수
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 2초를 기다리게 해보자
    setTimeout(() => {
      thunkAPI.dispatch(plus(payload));
    }, 2000);
  }
);

export const __minus = createAsyncThunk(
  // 이름
  "PLUS",
  // 함수
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 2초를 기다리게 해보자
    setTimeout(() => {
      thunkAPI.dispatch(minus(payload));
    }, 2000);
  }
);

// 초기 상태값
const initialState = {
  plusOneResult: 0,
  minusOneResult: 0,
  totalNumber: 0,
  globalNumber: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusOne: (state, action) => {
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        plusOneResult: state.plusOneResult + 1,
      };
    },
    minusOne: (state, action) => {
      return {
        ...state,
        minusOneResult: state.minusOneResult - 1,
      };
    },
    total: (state, action) => {
      return {
        ...state,
        totalNumber: state.plusOneResult + state.minusOneResult,
      };
    },
    plus: (state, action) => {
      return {
        ...state,
        globalNumber: state.globalNumber + action.payload,
      };
    },
    minus: (state, action) => {
      return {
        ...state,
        globalNumber: state.globalNumber - action.payload,
      };
    },
  },
});

export const { plusOne, minusOne, total, plus, minus } = counterSlice.actions;
export default counterSlice.reducer;
