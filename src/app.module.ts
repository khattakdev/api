import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [DiscordModule],
=======

@Module({
  imports: [],
>>>>>>> 4688b98c711080fb1afb8b7aa17b38832c00c359
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
