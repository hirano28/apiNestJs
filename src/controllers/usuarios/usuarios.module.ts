import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModel } from 'src/models/usuario.model';
import { UsuariosService } from 'src/services/usuarios/usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioModel])],
    controllers: [UsuariosController],
    providers: [UsuariosService]
})
export class UsuariosModule {}
