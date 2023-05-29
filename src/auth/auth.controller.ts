import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from '../Guard/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './local-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  //@HttpCode(200)
  async login(@Body() user: User) {
    const result = await this.authService.login(user);
    if (!result) {
      return new UnauthorizedException('Username or password is incorrect');
    }
    return result;
  }
  @Post('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  async profile() {
    return 'Authorized';
  }
}
