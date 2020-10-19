import React from 'react';
import Head from './Head';
import styles from './Produtos.module.css';
const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <div>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>aaa@aa.com</li>
          <li>aaa@aa.com</li>
          <li>aaa@aa.com</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
