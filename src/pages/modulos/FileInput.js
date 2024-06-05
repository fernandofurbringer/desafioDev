import React from 'react';
import styles from "./style/FileInput.module.css";

const FileInput = ({ onFileChange }) => (
    <div className={styles.form}>
        <label htmlFor="fileInput" className={styles.customButton}>
        Selecionar arquivo
        </label>
        <input 
        type="file" 
        id="fileInput" 
        accept=".xlsx" 
        onChange={onFileChange} 
        className={styles.fileInput}
        />
    </div>
);

export default FileInput;