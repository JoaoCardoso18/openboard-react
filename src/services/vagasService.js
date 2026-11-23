const BASE_URL = '/api';
const CHAVE_STORAGE = 'openboard:vagas';
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

// Vagas cadastradas pelo formulário (RF8), guardadas no localStorage
export function buscarVagasSalvas() {
  const salvas = localStorage.getItem(CHAVE_STORAGE);
  return salvas ? JSON.parse(salvas) : [];
}

export function salvarVaga(vaga) {
  const novaVaga = { ...vaga, id: Date.now(), publicada: 'agora' };
  const vagas = [...buscarVagasSalvas(), novaVaga];
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(vagas));
  return novaVaga;
}

// Vagas do vagas.json + vagas cadastradas
export async function buscarVagas() {
  await esperar(800); // só para enxergar o "carregando"
  const res = await fetch(`${BASE_URL}/vagas.json`);

  if (!res.ok) {
    throw new Error('Não foi possível carregar as vagas.');
  }
  const vagasApi = await res.json();
  return [...vagasApi, ...buscarVagasSalvas()];
}

export async function buscarVaga(id) {
  const vagas = await buscarVagas();

  const vaga = vagas.find((v) => v.id === Number(id));
  if (!vaga) throw new Error(`Vaga #${id} não encontrada.`);
  return vaga;
}
