import { Usuario, Database } from "./database";

export const UsuarioService = {

  saveUsuario: (name: string, data: Usuario) => {
    const finded = UsuarioService.findByName(name);
    const allUsers = Database.get();
    if (!finded.value) {
      const user = Object.assign({}, data);
      user.nome = name;
      allUsers.push(user);
    } else {
      const user = Object.assign(finded.value, data);
      allUsers[finded.index] = user;
    }
    Database.save(allUsers);
  },

  findByName: (name: string): {value: Usuario | undefined, index: number} => {
    const findFunction = (user: Usuario) => user.nome === name;
    return {
      value: Database.get().find(findFunction),
      index: Database.get().findIndex(findFunction),
    }
  },

  getAll: () => {
    return Database.get();
  }
};
