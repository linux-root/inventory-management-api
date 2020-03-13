import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Inventory} from './inventory.model';

@model({settings: {strict: false}})
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'number',
    default: 0,
  })
  qty?: number;

  @property({
    type: 'number',
    default: 0,
  })
  total_price?: number;

  @property({
    type: 'number',
    default: 0,
  })
  shipping_fee?: number;

  @property({
    type: 'string',
  })
  customerId?: string;

  @belongsTo(() => Inventory)
  inventoryId: string;
  [prop: string]: any;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
