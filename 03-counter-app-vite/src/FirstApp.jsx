import PropTypes from 'prop-types';


export const FirstApp = ({title, subtitle, name}) => {
    // if(!title){
    //     throw new Error('titulo no existe')
    // }
  return (
    <>
      <h1 data-testid= "test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{ name }</p>
    </>
  );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    subtitle: 'no hay subtitulos',
    name: 'no hay name'
}
