import { Model } from 'objection';
import { Orders } from './orders';
import { Products } from './products';

export class Clients extends Model {

    static get tableName() {
        return 'clients';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['firstName', 'lastName', 'email'],
            properties: {
                id: { type: 'integer' },
                firstName: { type: 'string', minLength: 1, maxLength: 255 },
                lastName: { type: 'string', minLength: 1, maxLength: 255 },
                email: { type: 'email', minLength: 1, maxLength: 255 },
                gender: { type: 'string', enum: ['Male', 'Female', 'Other'], default: 'Other' },
                isActice: { type: 'boolean' },
                order: { type: 'array'},
              },
        };
    }

    static get relationMappings() {
        return {
            orders: {
                relation: Model.ManyToManyRelation,
                modelClass: Products,
                join: {
                  from: 'clients.id',
                  through: {
                      from: 'orders.client_id',
                      to: 'orders.product_id',
                    },
                  to: 'products.id',
                },
              },
        };
    }

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender?: string;
    isActive: boolean = true;
    orders: Products[];
}
