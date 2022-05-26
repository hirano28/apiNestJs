import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosModelDTO } from 'src/DTO/usuariosDTO.model';
import { UsuarioModel } from 'src/models/usuario.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

    constructor(@InjectRepository(UsuarioModel) private model: Repository<UsuarioModel>,) {}


    async findAll(): Promise<UsuariosModelDTO[]> {
        return await this.model.find();
    }

    async findByName(nome: string): Promise<UsuariosModelDTO> {
        const usuarioParaRetornar = this.model.findOneBy({"nome": "Edson"})
        console.log(usuarioParaRetornar);
        return usuarioParaRetornar;
    }

    save(usuario: UsuariosModelDTO) {
        return this.model.save(usuario);
    }

}
