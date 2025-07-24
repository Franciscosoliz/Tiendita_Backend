import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuarios } from 'src/usuarios/usuarios.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) { }

  async validateUser(usuario: string, password: string): Promise<Usuarios | null> {
    const user = await this.usuariosService.findByUsername(usuario);
    if (!user) return null;

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('¿Contraseña válida?', passwordMatch);

    if (passwordMatch) {
      return user;
    }
    return null;
  }

  async login(usuario: string, password: string) {
    const user = await this.validateUser(usuario, password);

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = { username: user.usuario, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        usuario: user.usuario,
        rol: user.rol,
      },
    };
  }


  async register(usuario: string, password: string, rol?: string): Promise<Usuarios> {
    const existingUser = await this.usuariosService.findByUsername(usuario);
    if (existingUser) {
      throw new ConflictException('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return this.usuariosService.create({
      usuario,
      password: hashedPassword,
      rol: rol || 'user',
    });
  }
}
