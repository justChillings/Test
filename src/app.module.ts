import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardAntity } from './Dto/board.antity';
import { BoardService } from './Board/board.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host: 'localhost',
      port : 3306,
      username : 'SeungHo',
      password : 'root',
      database : 'test',
      entities : [BoardAntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BoardService],
})
export class AppModule {}
