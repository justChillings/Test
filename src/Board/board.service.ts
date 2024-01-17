import { Injectable } from '@nestjs/common'
import { BoardReqDto } from 'src/Dto/board.req.dto'
import { BoardResDto } from 'src/Dto/board.res.dto'

@Injectable()
export class BoardService {
  async create(newboardcontroller: BoardReqDto) {
    const service = new BoardResDto

    if (service.text = 'hello') {
      service.status = 200;
      service.message = 'Success';
    }
    else if (service.text = 'Hello') {
      service.status = 404;
      service.message = 'Please, Again';
    }
    else {
      service.status = 500;
      service.message = 'Fail';
    }
    return service;
  }
}