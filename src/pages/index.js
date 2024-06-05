import styles from "../styles/home.module.css";
import { useState } from 'react';
import * as XLSX from 'xlsx';
import FileInput from './modulos/FileInput';
import DataTable from './modulos/DataTable';

export default function Home() {
  const [data, setData] = useState([]);

  const extrairDadosPlanilhaExcel = async (event) => {
    const file = event.target.files[0];

    localStorage.removeItem('tableData');

    if (!file || !(file instanceof Blob)) {
      console.error('Arquivo inválido');
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const arrayBuffer = e.target.result;
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      console.log(jsonData);
      setData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Desafio Dev</h1>
      <span className={styles.caption}>
        Clique <a href="/produtos.xlsx">aqui</a> para baixar o modelo de arquivo
      </span>
      <hr />
      <FileInput onFileChange={extrairDadosPlanilhaExcel} />
      <DataTable data={data} />
    </div>
  );
}
