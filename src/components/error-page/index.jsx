import PropTypes from 'prop-types';

const ErrorPage = (props) => {
  const pt = props.language === 'pt';
  const translated =
    props.title === 'No Config is provided.'
      ? [
          'Configuração não fornecida.',
          'Forneça a configuração necessária para carregar o currículo.',
        ]
      : props.status === '404'
        ? [
            'Usuário do GitHub não encontrado.',
            'Confira o nome de usuário na configuração do currículo.',
          ]
        : props.status === '429'
          ? [
              'Limite de solicitações atingido.',
              'O GitHub limitou temporariamente as solicitações. Tente novamente mais tarde.',
            ]
          : [
              'Não foi possível carregar o currículo.',
              'Ocorreu um erro. Tente novamente mais tarde.',
            ];
  return (
    <div
      lang={pt ? 'pt-BR' : 'en-US'}
      className="min-w-screen min-h-screen bg-base-200 flex items-center p-5 lg:p-20 overflow-hidden relative"
    >
      <div className="flex-1 min-h-full min-w-full rounded-3xl bg-base-100 shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full">
          <div className="mb-10 md:mb-20 mt-10 md:mt-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-primary mb-10">
              {props.status}
            </h1>
            <p className="text-lg pb-2 text-base-content">
              {pt ? translated[0] : props.title}
            </p>
            <div className="text-base-content text-opacity-60">
              {pt ? translated[1] : props.subTitle}
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 md:w-96 h-96 md:h-full bg-accent bg-opacity-10 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div className="w-96 h-full bg-secondary bg-opacity-10 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
    </div>
  );
};

ErrorPage.propTypes = {
  language: PropTypes.string,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.node.isRequired,
};

export default ErrorPage;
