import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { initialState, fundPricesAdapter } from "./state";
import { ldFundPriceEnqry } from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "mlfub",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const mlfubReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(ldFundPriceEnqry.fulfilled, (state, action) => {
      fundPricesAdapter.upsertMany(
        state.fundPrices,
        action.payload.fundPriceEnqryResponse
      );
    })
    .addMatcher(isAnyOf(ldFundPriceEnqry.rejected), (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
);

export default persistReducer(persistConfig, mlfubReducer);
