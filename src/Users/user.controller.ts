import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from '../Users/user.service';
import { User } from '../Users/user.entity';
import { JwtAuthGuard } from '../auth/local-auth.guard';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<User[]> {
    return [
      {
        id: 1,
        username: 'Ildar',
        password: 'tatarin17',
      },
    ];
  }
}
// TO DO: добитьсся того чтобы пользователя из бд брал
