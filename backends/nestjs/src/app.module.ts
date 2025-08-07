import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ListingsService } from './listings/listings.service';
import { ListingsController } from './listings/listings.controller';
import { ListingsModule } from './listings/listings.module';
import { JournalModule } from './journal/journal.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    PrismaModule,
    ListingsModule,
    JournalModule,
  ],
  providers: [ListingsService],
  controllers: [ListingsController],
})
export class AppModule {}
