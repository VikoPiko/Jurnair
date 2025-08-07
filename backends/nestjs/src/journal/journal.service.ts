import { Injectable } from '@nestjs/common';
import { Journal, User, Visibility } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { JournalDto } from './dto';

@Injectable()
export class JournalService {
  constructor(private prisma: PrismaService) {}

  async getAllEntries(user: User) {
    const data = await this.prisma.journal.findMany({
      where: {
        userId: user.id,
      },
    });
    return data;
  }
  async getEntries() {
    const data = await this.prisma.journal.findMany({});
    return data;
  }

  async getEntry(entry: string) {
    try {
      const data = await this.prisma.journal.findFirst({
        where: {
          id: entry,
        },
      });
      if (!data) throw new Error('No entry found');
      return data;
    } catch (error) {
      console.error(`Error in fetching: `, error);
    }
  }

  async createNewEntry(dto: JournalDto, userId: string) {
    try {
      const newEntry = await this.prisma.journal.create({
        data: {
          title: dto.title,
          description: dto.description,
          location: dto.location,
          date: dto.date,
          theme: dto.theme,
          photos: dto.photos,
          visibility: dto.visibility.toUpperCase() as keyof typeof Visibility,
          userId: userId,
        },
      });
      return newEntry;
    } catch (error) {
      console.error('Failed to create journal entry', error);
      throw new Error('Failed to create entry');
    }
  }
}
