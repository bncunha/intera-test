import Api, { Usuario } from "./api";

export const UsuarioService = {

  saveUsuario: (name: string, data: Usuario) => {
    const finded = UsuarioService.findByName(name);
    const allUsers = Api.get();
    if (!finded.value) {
      const user = Object.assign({}, data);
      allUsers.push(user);
    } else {
      const user = Object.assign(finded.value, data);
      allUsers[finded.index] = user;
    }
    Api.save(allUsers);
  },

  findByName: (name: string): {value: Usuario | undefined, index: number} => {
    const findFunction = (user: Usuario) => user.nome === name;
    return {
      value: Api.get().find(findFunction),
      index: Api.get().findIndex(findFunction),
    }
  },
};
