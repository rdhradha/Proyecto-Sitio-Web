import ListMaker from '../ListMaker';
import dataRight from './list-right';

const RightSide = () => {
  const dataRights = dataRight.map((prop) => (
    <ListMaker key={prop.id} name={prop.name} ruta={prop.ruta} />
  ));
  return (
    <>
      <ul>
        <li>
          <a href='#' className='title-href anchor-footer'>
            Más Información
          </a>
        </li>
        {dataRights}
      </ul>
    </>
  );
};

export default RightSide;
