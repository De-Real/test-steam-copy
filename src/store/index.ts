import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import likeListReducer from "./likeListSlice";

export const store = configureStore({
	reducer: {
		liked: likeListReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
