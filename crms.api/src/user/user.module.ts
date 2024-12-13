import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/model/user';

@Module({
  imports : [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
