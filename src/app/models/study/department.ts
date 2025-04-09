import { Batch } from './batch';

export class Department {
    id: number;
    name: string;
    batches?: Batch[];
}
