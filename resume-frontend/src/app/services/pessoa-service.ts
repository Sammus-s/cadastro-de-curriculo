import { API } from "../@libs/axios"; // Certifique-se de que está importando a instância do axios
import { IPessoa } from "../@libs/types"; // Ajuste o caminho de importação conforme necessário

const _ENDPOINT = '/pessoas';

const getAll = () => (API.get(_ENDPOINT));
const create = (pessoa: IPessoa) => (API.post(_ENDPOINT, pessoa));
const getById = async (id: string): Promise<IPessoa> => {
  const { data } = await API.get(`${_ENDPOINT}/${id}`)
  return data;
}
const update = (id: number, pessoa: IPessoa) => (API.put(`${_ENDPOINT}/${id}`, pessoa));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));

export const PessoaService = {
  getAll,
  create,
  getById,
  update,
  remove
};
