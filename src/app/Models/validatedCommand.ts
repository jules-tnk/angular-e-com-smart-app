import {ProductCommand} from "./ProductCommand";

export interface ValidatedCommand {
  id: number;
  productCommands: ProductCommand[];
  totalPrice: number;
  date: Date;
}
