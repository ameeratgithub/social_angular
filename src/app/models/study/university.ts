import { Campus } from './campus';

export class University {
    id: number;
    name: string;
    location: string;
    logo: string;
    abbreviation?: string;
    campuses?: Campus[];
    creator?: any;
}
