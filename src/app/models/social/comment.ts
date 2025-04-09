import { User } from 'src/app/models/user/user';

export class Comment {
    id: string;
    text: string;
    commenter?: User;
    date: Date | number;
    likers?: User[];
    comments?: Comment[];
}
