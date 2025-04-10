export interface RolUsuarioInterface {
  id:number
  descripcion:String
}

export const rolesList:RolUsuarioInterface[] = [
  {
    id:1,
    descripcion:'estudiante_umg'
  },
  {
    id:2,
    descripcion:'catedratico_umg'
  },
  {
    id:3,
    descripcion:'externo'
  }

]

export interface Tallas{
  talla:string
}

export const tallasList: Tallas[]= [
  {
    talla:'XS'
  },
  {
    talla:'S'
  },
  {
    talla:'M'
  },
  {
    talla:'L'
  },
  {
    talla:'XL'
  }

]
