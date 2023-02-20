import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

// Define a type for the slice state
interface LikeListState {
	likeList: string[];
}

let likeList: string[] = [];

if (localStorage.getItem("likeList")) {
	const gottenList = localStorage.getItem("likeList") as string;
	likeList = JSON.parse(gottenList);
}

// Define the initial state using that type
const initialState: LikeListState = {
	likeList,
};

const likeListSlice = createSlice({
	name: "like-list",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addLikedApp: (state, action: PayloadAction<string>) => {
			const newLikeList = [...state.likeList, action.payload];
			state.likeList = newLikeList;
			localStorage.setItem("likeList", JSON.stringify(newLikeList));
		},
		removeLikedApp: (state, action: PayloadAction<string>) => {
			const newLikeList = state.likeList.filter(
				(likedApp) => likedApp !== action.payload
			);
			state.likeList = newLikeList;
			localStorage.setItem("likeList", JSON.stringify(newLikeList));
		},
	},
});

export const { addLikedApp, removeLikedApp } = likeListSlice.actions;

export const selectLikeList = (state: RootState) => state.liked.likeList;

export default likeListSlice.reducer;
