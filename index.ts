import { knex } from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { Clients, Orders, Products } from './models/index';

const config = {
    host : '127.0.0.1',
    user : 'guest',
    password : 'guest',
    database: 'test',
};

(async () => {
    const pgInstance = knex({
        client: 'pg',
        connection: config,
        ...knexSnakeCaseMappers(),
    });

    Model.knex(pgInstance);

    await pgInstance.migrate.up();


    // ##### SIMPLE INSERT ######

    // await Clients.query().insert({
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'johnDoe@gmail.com',
    //     gender: 'Male',
    // });
    // console.log(await Clients.query().select('*'));

    // ##### THROW VALIDATION ERROR FOLLOWING JSON SCHEMA ######

    // validation error
    // await Clients.query().insert({
    //     email: 'johnDoe@gmail.com',
    // }).catch((error) => {
    //     console.log("Validation error ", error);
    // });

    // ##### SIMPLE DELETE ALL ######

    // await Clients.query().delete();

    // ##### SIMPLE GRAPH INSERT ######

    // await Clients.transaction(pgInstance, async trx => {
    //     await Clients.query(trx).insertGraph({
    //         firstName: 'Joshua',
    //         lastName: 'Tree',
    //         email: 'JoshuaTree@gmail.com',
    //         gender: 'Male',
    //         orders: [{
    //             name: 'test',
    //             price: 12.84,
    //         }],
    //     });
    // });

    // const resultClients = await Clients.query().select('*');
    // const resultOrders = await Orders.query().select('*');
    // const resultProducts = await Products.query().select('*');
    // console.log(resultClients, resultOrders, resultProducts);

})();
