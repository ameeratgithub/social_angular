import { User } from 'src/app/models/user/user';
import { Comment } from './comment';
import { Media } from 'src/app/shared/services/media/media';
import { Album } from 'src/app/shared/services/media/album';

export class Post {
    id: string;
    date: Date | number;
    uploader: User;
    text?: string;
    hasMedia: boolean;
    media?: Media;
    album?: Album;
    likes?: User[];
    comments?: Comment[];
    shares?: User[];
    hasReactions:boolean;
    totalLikes?: number;
    totalComments?: number;
    totalShares?: number;
}
