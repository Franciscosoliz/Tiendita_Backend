import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() body: { usuario: string; password: string; rol?: string }) {
        const { usuario, password, rol } = body;
        if (!usuario || !password) {
            throw new BadRequestException('Usuario y contraseña son requeridos');
        }
        return this.authService.register(usuario, password, rol);
    }

    @Post('login')
    async login(@Body() body: { usuario: string; password: string }) {
        const { usuario, password } = body;

        if (!usuario || !password) {
            throw new BadRequestException('Usuario y contraseña son requeridos');
        }

        const user = await this.authService.validateUser(usuario, password);
        if (!user) {
            throw new BadRequestException('Credenciales inválidas');
        }

        return this.authService.login(usuario, password);
    }
}
