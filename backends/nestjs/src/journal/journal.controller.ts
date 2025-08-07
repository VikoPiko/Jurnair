import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { JournalService } from './journal.service';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { Journal, User } from '@prisma/client';
import { JournalDto } from './dto';

@Controller('journal')
export class JournalController {
  constructor(private journalService: JournalService) {}
  @Get('all')
  getEntries(@GetUser() user: User) {
    // return this.journalService.getAllEntries(user);
    return this.journalService.getEntries();
  }

  @UseGuards(JwtGuard)
  @Post('new-entry')
  createEntry(@GetUser() user: User, @Body() dto: JournalDto) {
    return this.journalService.createNewEntry(dto, user.id);
  }

  // @Post('get-entry')
  @Get('entry/:id')
  // getJournalEntry(@GetUser() user: User, @Body() body: { id: string }) {
  getJournalEntry(@GetUser() user: User, @Param('id') id: string) {
    return this.journalService.getEntry(id);
  }
}
