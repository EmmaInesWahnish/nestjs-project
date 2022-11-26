import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor (private readonly usersService: UsersService){}

    async validateUser(email: string, this_password: string):Promise<any> {
        const user = await this.usersService.checkOne(email);
        const passwordValid = await bcrypt.compare(this_password, user.password)
        if (!user) {
            throw new NotAcceptableException('El usuario no existe');
          }
        if (user && passwordValid) {
          return {
            message: "Usuario autenticado",
            user: user
          };
        }
        return {
            message: "Usuario no autenticado"
        };
    }
}
