import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsuariosModelDTO } from 'src/DTO/usuariosDTO.model';
import { UsuariosService } from 'src/services/usuarios/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(
        private usuariosService: UsuariosService
        ) {}

    @Get()
    async findAll(): Promise<UsuariosModelDTO[]> {
        const usuarios = this.usuariosService.findAll();
        return usuarios;
    }

    @Get(':nome')
    async findByName(@Param('nome') nome: string): Promise<UsuariosModelDTO> {
        const usuarios = await this.usuariosService.findByName(nome);
        return usuarios;
    }

    @Post()
    async save(@Request() usuario: UsuariosModelDTO) {
        return this.usuariosService.save(usuario);
    }
}
