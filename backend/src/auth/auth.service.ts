import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  // Demo userlar (real loyihada database ishlatiladi)
  private readonly users = [
    {
      id: 1,
      email: 'admin@example.com',
      password: 'admin123',
      name: 'Admin User',
    },
    {
      id: 2,
      email: 'user@example.com',
      password: 'user123',
      name: 'Regular User',
    },
  ];

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Array method: find() - user topish
    const user = this.users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Email yoki parol noto\'g\'ri');
    }

    // Parolni olib tashlash (xavfsizlik uchun)
    const { password: _, ...userWithoutPassword } = user;

    return {
      success: true,
      message: 'Muvaffaqiyatli kirildi!',
      user: userWithoutPassword,
      token: this.generateToken(user.id), // Demo token
    };
  }

  private generateToken(userId: number): string {
    // Demo token (real loyihada JWT ishlatiladi)
    return `demo_token_${userId}_${Date.now()}`;
  }
}
