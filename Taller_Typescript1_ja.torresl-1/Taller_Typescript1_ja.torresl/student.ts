export class Student {
	nombre: string;
	cedula: string;
	codigo: string;
	edad: number;
	direccion: string;
	telefono: string;


	constructor(nombre: string, cedula: string,  codigo: string, edad:number, direccion: string, telefono: string ) {
		this.nombre = nombre;
		this.cedula = cedula;
		this.codigo = codigo;
		this.edad = edad;
		this.direccion = direccion;
		this.telefono = telefono;
	}
}
