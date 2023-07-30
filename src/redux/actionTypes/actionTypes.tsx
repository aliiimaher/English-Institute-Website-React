export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

// Define the types for your actions
export interface AddItemAction {
  type: typeof ADD_ITEM;
}

export interface DeleteItemAction {
  type: typeof DELETE_ITEM;
}

export type CartActionTypes = AddItemAction | DeleteItemAction;
