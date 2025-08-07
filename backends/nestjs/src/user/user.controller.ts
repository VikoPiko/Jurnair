import { Controller, Get, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  @UseGuards(JwtGuard)
  @Get('/me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get()
  getAllUsers() {
    return this.UserService.getUsers();
  }
}
