import { makeVar } from "@apollo/client";

export const authDataVar = makeVar({
  id: null,
  username: null,
  token: localStorage.getItem("token") || null,
});
export const cartItemsVar = makeVar(
  JSON.parse(localStorage.getItem("carts")) || []
);

export const wishlistItemsVar = makeVar(
  JSON.parse(localStorage.getItem("wishlists")) || []
);
