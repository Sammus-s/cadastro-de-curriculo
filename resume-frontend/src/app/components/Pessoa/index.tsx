import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PessoaService } from '../../services/pessoa-service';
import { IPessoa } from '../../@libs/types';

const PessoaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Obtém o ID da URL
  const [pessoa, setPessoa] = useState<IPessoa>({} as IPessoa);

  useEffect(() => {
    const pessoaId = id || '1';

    PessoaService.getById(pessoaId)
      .then((result) => {
        if (result) {
          setPessoa(result);
        }
      })
      .catch((error) => {
        console.error('Erro ao carregar dados da pessoa:', error);
      });
  }, [id]);

  return (
    <div className="pessoa-details">
      <h2>{pessoa.nome}</h2>
      <p><strong>Email:</strong> {pessoa.email}</p>
      <p><strong>Data de Nascimento:</strong> {new Date(pessoa.dataNascimento).toLocaleDateString()}</p>
      {pessoa.telefone && <p><strong>Telefone:</strong> {pessoa.telefone}</p>}

      <h3>Formações:</h3>
      <ul>
        {pessoa.formacoes.length > 0 ? (
          pessoa.formacoes.map((formacao) => (
            <li key={formacao.id_formacao}>
              <strong>{formacao.nome}</strong>
              <p>{formacao.descricao}</p>
              <p><strong>Início:</strong> {new Date(formacao.dataInicio).toLocaleDateString()}</p>
              {formacao.dataFinalizacao && (
                <p><strong>Conclusão:</strong> {new Date(formacao.dataFinalizacao).toLocaleDateString()}</p>
              )}
            </li>
          ))
        ) : (
          <p>Não há formações registradas.</p>
        )}
      </ul>

      <h3>Experiências:</h3>
      <ul>
        {pessoa.experiencias.length > 0 ? (
          pessoa.experiencias.map((experiencia) => (
            <li key={experiencia.id_experiencia}>
              <strong>{experiencia.nomeEmpresa}</strong> - {experiencia.cargo}
              <p>{experiencia.descricaoAtividades}</p>
              <p><strong>Início:</strong> {new Date(experiencia.dataInicio).toLocaleDateString()}</p>
              {experiencia.dataFinalizacao && (
                <p><strong>Término:</strong> {new Date(experiencia.dataFinalizacao).toLocaleDateString()}</p>
              )}
            </li>
          ))
        ) : (
          <p>Não há experiências registradas.</p>
        )}
      </ul>
    </div>
  );
};

export default PessoaDetails;
