import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.usersService.findUserByEmail(data.email);

    const validPassword = await compareSync(data.password, user.password);

    if (!validPassword) {
      throw new UnauthorizedException('Login fail');
    }

    const token = await this.jwtToken(user);

    return { user, token };
  }

  private async jwtToken(user: User): Promise<string> {
    const payload = { username: user.name, sub: user.uuid };

    return this.jwtService.signAsync(payload);
  }
}
