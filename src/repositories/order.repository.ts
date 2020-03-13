import {DefaultCrudRepository, repository, HasOneRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {Order, OrderRelations, Inventory} from '../models';
import {LocalDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {InventoryRepository} from './inventory.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {

  public readonly inventory: BelongsToAccessor<Inventory, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.local') dataSource: LocalDataSource, @repository.getter('InventoryRepository') protected inventoryRepositoryGetter: Getter<InventoryRepository>,) {
    super(Order, dataSource);
    this.inventory = this.createBelongsToAccessorFor('inventory', inventoryRepositoryGetter,);
    this.registerInclusionResolver('inventory', this.inventory.inclusionResolver);
  }
}
