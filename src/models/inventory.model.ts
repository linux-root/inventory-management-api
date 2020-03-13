import {Entity, model, property, hasOne} from '@loopback/repository';
import {Order} from './order.model';

@model()
export class Inventory extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
    default: 0,
  })
  price?: number;

  @property({
    type: 'number',
    default: 0,
  })
  available_qty?: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'buffer',
  })
  picture?: Buffer;

  constructor(data?: Partial<Inventory>) {
    super(data);
  }
}

export interface InventoryRelations {
  // describe navigational properties here
}

export type InventoryWithRelations = Inventory & InventoryRelations;
