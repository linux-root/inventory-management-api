import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Order,
  Inventory,
} from '../models';
import {OrderRepository} from '../repositories';

export class OrderInventoryController {
  constructor(
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
  ) { }

  @get('/orders/{id}/inventory', {
    responses: {
      '200': {
        description: 'Inventory belonging to Order',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inventory)},
          },
        },
      },
    },
  })
  async getInventory(
    @param.path.string('id') id: typeof Order.prototype.id,
  ): Promise<Inventory> {
    return this.orderRepository.inventory(id);
  }
}
