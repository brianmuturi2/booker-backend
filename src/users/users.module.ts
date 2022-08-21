import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.schema';
import { User } from './models/user.model';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ],
  providers: [UsersService, UsersResolver, UsersRepository]
})
export class UsersModule {}
