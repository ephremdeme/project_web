import { cartItemsVar } from "../../authReactive";

export const addToCart = (item, addToast, quantityCount = 1) => {
  if (addToast) {
    addToast("Added To Cart", { appearance: "success", autoDismiss: true });
  }

  if (!cartItemsVar().find((cart) => cart.id === item.id)) {
    cartItemsVar([...cartItemsVar(), { ...item, quantities: quantityCount }]);
  }

  saveCart();
};
export const increaseQuantity = (item, addToast, quantityCount) => {
  if (addToast) {
    addToast("Item Incremented From Cart", {
      appearance: "success",
      autoDismiss: true,
    });
  }
  cartItemsVar(
    cartItemsVar().map((cart) => {
      if (cart.id === item.id) {
        cart.quantities += 1;
      }
      return cart;
    })
  );

  saveCart();
};
export const decreaseQuantity = (item, addToast) => {
  if (addToast) {
    addToast("Item Decremented From Cart", {
      appearance: "warning",
      autoDismiss: true,
    });
  }
  cartItemsVar(
    cartItemsVar().map((cart) => {
      if (cart.id === item.id) {
        cart.quantities -= 1;
      }

      return cart;
    })
  );
  saveCart();
};

export const deleteFromCart = (item, addToast) => {
  if (addToast) {
    addToast("Removed From Cart", { appearance: "error", autoDismiss: true });
  }
  cartItemsVar(cartItemsVar().filter((cart) => cart.id !== item.id));
  saveCart();
};
export const deleteAllFromCart = (item, addToast) => {
  if (addToast) {
    addToast("Removed All From Cart", {
      appearance: "error",
      autoDismiss: true,
    });
  }
  cartItemsVar([]);
  saveCart();
};

export const cartItemStock = (item, color, size) => {
  if (item.quantity) {
    return item.quantity;
  }
};

export const prepareCart = () => {
  let arr = cartItemsVar().map((cart) => {
    return {
      id: cart.id,
      quantity: cart.quantities,
    };
  });
  return arr;
};

const saveCart = () => {
  localStorage.setItem("carts", JSON.stringify(cartItemsVar()));
};
