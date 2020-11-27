import {Injectable} from '@nestjs/common';
import {PhotoEntity} from "./photo.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


@Injectable()
export class PhotoService {

    constructor(@InjectRepository(PhotoEntity) private photoRepository: Repository<PhotoEntity>) {
    }


   async getAllPhotos(): Promise<PhotoEntity[]> {

        let photos = await this.photoRepository.find({select: ['photo']})

        let converted = []
        photos.forEach(photo=>{
            converted.push('data:image/jpeg;base64,' + photo.photo.toString('base64'))
        })
        return [...converted]
    }


    async getPhotoById(id: string) {

        let ph = await this.photoRepository.findOne(id, {select: ['photo']})
           return 'data:image/jpeg;base64,' + ph.photo
    }

    async create(photo: PhotoEntity) {
        try {
            return await this.photoRepository.save(photo)
        } catch (e) {
            return e
        }
    }

}
