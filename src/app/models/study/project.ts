import { Student } from './student';
import { Image } from 'src/app/shared/services/media/image';
import { Video } from 'src/app/shared/services/media/video';

export class Project {
    id: string;
    name: string;
    fileName: string;
    url: string;
    description: string;
    date: Date | number;
    uploader: Student[];
    tags: string[];
    images: Image[];
    videos: Video[];
}
