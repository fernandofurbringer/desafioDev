import React from 'react';
import styles from './style/Buttons.module.css';

const Buttons = ({ handleSave, handleClear }) => {
  return (
    <div>
      <button onClick={handleSave} className={styles.saveButton}>Salvar</button>
      <button onClick={handleClear} className={styles.clearButton}>Limpar Dados</button>
    </div>
  );
};

export default Buttons;