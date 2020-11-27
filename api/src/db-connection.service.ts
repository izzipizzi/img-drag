import {Injectable} from "@nestjs/common";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";

@Injectable()
export class DbConnectionService implements TypeOrmOptionsFactory{
    createTypeOrmOptions():TypeOrmModuleOptions{
        return {
            name: 'default',
            type: 'postgres',
            host: process.env.PGHOST,
            port: Number(process.env.PGPORT),
            username: process.env.PGUSER,
            password : process.env.PGPASSWORD,
            database: process.env.PGDATABASE,
            synchronize: true,
            dropSchema: false,
            logging: true,
            entities:['dist/**/*.entity{.ts,.js}']

        }
    }

}
