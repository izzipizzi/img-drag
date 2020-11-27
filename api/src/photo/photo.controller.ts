import {Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {PhotoEntity} from "./photo.entity";
import {PhotoService} from "./photo.service";
import {FileInterceptor} from "@nestjs/platform-express";


@Controller('photo')
export class PhotoController {
    constructor(public service: PhotoService) {
    }

    @Get()
    async findAll(){
        return await this.service.getAllPhotos();
    }

    @Get(':id')
    async findById(@Param() params) {

        return await this.service.getPhotoById(params.id)

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file,@Res() res) {
        const newPhoto = new PhotoEntity()
        //Валідація фотки щоб не грузити великі фото в бд і тд
        console.log(file.size)
        if (file.size>2500000){
            return res.json({
                error : 'Занадто велике фото(2mb максимум)'
            })
        }

        // магія
        newPhoto.photo =  file.buffer


        return await this.service.create(newPhoto)

    }
}

