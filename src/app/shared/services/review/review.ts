import { User } from 'src/app/models/user/user';

export class Review {
    id: string;
    rating: number;
    text?: string;
    reviewer: User;
}
