import { UsuarioService } from './usuario/usuario.service';
import { ProductoService } from "./producto/producto.service";
export * from './usuario/usuario.service';





export const services: any[] = [UsuarioService,ProductoService];

