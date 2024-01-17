import { Controller, Post, Body, Res } from '@nestjs/common'
import { BoardReqDto } from 'src/Dto/board.req.dto'
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardservice : BoardService) {}

  @Post('hello')
  async create(@Body() controllerboard : BoardReqDto, @Res() res: Response) {
    const result = await this.boardservice.create(controllerboard);
    return result;
  }
}