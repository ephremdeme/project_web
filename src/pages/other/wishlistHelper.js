import { wishlistItemsVar } from "../../authReactive";

export const addToWishlist = (item, addToast, addToWishlistServer) => {
  if (addToast) {
    addToast("Added To Wishlist", { appearance: "success", autoDismiss: true });
  }
  if (addToWishlistServer) {
    addToWishlistServer({
      variables: { productId: item.id },
    });
  }

  wishlistItemsVar(Array.from(new Set([...wishlistItemsVar(), item])));

  saveWishlist();
};

export const deleteFromWishlist = (item, addToast, removeWishlist) => {
  if (addToast) {
    addToast("Removed From Wishlist", {
      appearance: "error",
      autoDismiss: true,
    });
  }
  wishlistItemsVar(wishlistItemsVar().filter((cart) => cart.id !== item.id));
  if (removeWishlist) {
    removeWishlist({
      variables: { productId: item.id },
    });
  }
  saveWishlist();
};
export const deleteAllFromWishlist = (item, addToast, removeAllWishlist) => {
  if (addToast) {
    addToast("Removed All From Wishlist", {
      appearance: "error",
      autoDismiss: true,
    });
  }
  if (removeAllWishlist) removeAllWishlist();
  wishlistItemsVar([]);
  saveWishlist();
};

const saveWishlist = () => {
  localStorage.setItem("wishlists", JSON.stringify(wishlistItemsVar()));
};
