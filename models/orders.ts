import { Model } from 'objection';

export class Orders extends Model {
    static get tableName() {
        return 'orders';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['orderAt', 'clientId', 'productId'],
            properties: {
                uuid: { type: 'integer' },
                orderAt: { type: 'date-time' },
                clientId: { type: 'integer' },
                productId: { type: 'integer' },
              },
        };
    }

    id: number;
    orderAt: Date;
    clientId: number;
    productId: number;

    async $beforeInsert(queryContext) {
        await super.$beforeInsert(queryContext);
        this.orderAt = new Date();
    }
}
