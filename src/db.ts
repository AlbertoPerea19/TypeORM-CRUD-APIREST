import {DataSource} from 'typeorm';
import {User} from './entities/User';

export const AppDataSource = new DataSource({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'root',
   entities: [User],
   database: 'typeormdb',
   logging: true,
   synchronize: true
});