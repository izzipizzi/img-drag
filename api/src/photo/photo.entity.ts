import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('photo')
export class PhotoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({type: 'bytea'})
    photo: Buffer

}

