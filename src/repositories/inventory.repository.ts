import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Inventory, InventoryRelations, Order} from '../models';
import {LocalDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';

export class InventoryRepository extends DefaultCrudRepository<
  Inventory,
  typeof Inventory.prototype.id,
  InventoryRelations
> {

  constructor(
    @inject('datasources.local') dataSource: LocalDataSource ) {
    super(Inventory, dataSource);
  }
}
