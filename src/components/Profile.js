import React from 'react';
import styles from '../app/Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.info}>
        <h1>Nombre del Usuario</h1>
        <p>Edad<input className={styles.input} placeholder='20'></input></p>
        <p>Género: Femenino</p>
        <p>Teléfono: +1 123 456 7890</p>
        <p>Correo electrónico: user@example.com</p>
      </div>
    </div>
  );
};

export default Profile;