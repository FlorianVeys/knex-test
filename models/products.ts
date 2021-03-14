import { Model } from 'objection';

export class Products extends Model {
    static get tableName() {
        return 'products';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'price'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                description: { type: 'text' },
                price: { type: 'float' },
              },
        };
    }

    id: number;
    name: string;
    description: string;
    price: number;
}
