import { Emoji } from './emoji';

export class EmojiCategory {
    name: string;
    title: string;
    order: number;
    icon: string;
    selected?: boolean;
    items: Emoji[];
}
