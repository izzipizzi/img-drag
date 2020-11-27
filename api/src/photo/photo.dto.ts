import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class CreatePhotoDto {
    @ApiModelProperty({required:true})
    readonly id: number;

    @ApiModelProperty({required:true})
    readonly photo: Buffer;

}
