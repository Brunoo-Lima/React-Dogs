import React from 'react';
import styles from '../User/UserStyle/UserHeaderNav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MyPhotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Stats />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <AddPhoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}>
        <Exit />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
