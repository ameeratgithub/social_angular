import { Image } from './image';

export class Video {
    id: string;
    name: string;
    fileName: string;
    url: string | ArrayBuffer;
    cover?: Image;
}
