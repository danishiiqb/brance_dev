import { configureStore, createSlice } from "@reduxjs/toolkit";

const Side = createSlice({
    name: "SideBar",
    initialState: {
        show: false,
        selectedTab: null,
        NavItems: {
            Men: {
                id: "#MEN",
                Clothing: [
                    "All Clothing",
                    "Jacket & Coats",
                    "Hoodies & SweatShirts",
                    "Tshirts & Polos",
                    "Joggers",
                    "Shirts",
                    "Jeans",
                    "LoungeWear",
                    "Pants & Chinos",
                    "Socks"
                ],
                Accessories: [
                    "All Accessories",
                    "Bags",
                    "Sunglasses",
                    "Watches",
                    "Wallet"
                ],

                Brand: [
                    "Nike",
                    "Verasce",
                    "H&M",
                    "Adidas",
                    "Calvin Klein",
                    "North Face",
                    "Levis",
                    "ZARA",
                    "Burrberry",
                    "Hugo Boss"
                ],
                Trending: ["Nice"]
            },
            Boys: {
                id: "#BOYY",
                Clothing: [
                    "All Clothing",
                    "Jacket & Coats",
                    "Jeans",
                    "Joggers",
                    "Sets & OutFits",
                    "Shirts",
                    "Jumpers & KniitWear",
                    "Tshirt & Polos"
                ],
                Accessories: ["Bags"],
                Brand: [
                    "Nike",
                    "Tommy Hilfiger",
                    "H&M",
                    "Adidas",
                    "Hype",
                    "North Face",
                    "Levis",
                    "Lego",
                    "Next"
                ]
            },
            Collections: ["Diversity Collection", "Stratnum Collection"],
            Sale: "Sale",
            Gifts: ["Gifts For Men", "Gifts For Kids"]
        }
    },
    reducers: {
        open(state, action) {
            state.show = true;
        },
        close(state) {
            state.show = false;
        },
        currentLySelectedTab(state, action) {
            state.selectedTab = action.payload;
        }
    }
});

const actions = Side.actions;
const store = configureStore({
    reducer: {
        sidebar: Side.reducer
    }
});
export { store, actions };
