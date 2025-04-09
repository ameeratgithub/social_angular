import { Student } from './student';
import { Review } from 'src/app/shared/services/review/review';

export class Book {
    id: string;
    name: string;
    description: string;
    publishDate: number | Date;
    category: string;
    author: string;
    cover: string;
    uploader: Student;
    language: string;
    publisher: string;
    rating: number;
    totalReviews: number;
    reviews: Review[];
}
