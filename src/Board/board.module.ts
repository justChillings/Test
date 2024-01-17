import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardAntity } from "src/Dto/board.antity";

@Module({
  imports : [TypeOrmModule.forFeature([BoardAntity])],
  exports : [TypeOrmModule],
})
export class BoardMoudle {}