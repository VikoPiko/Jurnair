import { Visibility } from '@prisma/client';

export class JournalDto {
  title: string;
  description?: string;
  location: string;
  date: string;
  theme: string;
  photos?: string[];
  visibility: 'PRIVATE' | 'PUBLIC';
}
