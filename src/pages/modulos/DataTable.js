import React, { useState } from 'react';
import useEditableData from './useEditableData';
import SearchInput from './SearchInput';
import Table from './Table';
import Buttons from './Buttons';
import styles from './style/DataTable.module.css';

const DataTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { editableData, handleEdit, handleSave, handleClear } = useEditableData(data);

  // Filtra os dados com base no searchTerm
  const filteredData = editableData.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className={styles.dataTable}>
      <div className={styles.controls}>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} className={styles.searchInput} />
        <Buttons handleSave={handleSave} handleClear={handleClear} />
      </div>
      <Table data={filteredData} handleEdit={handleEdit} />
    </div>
  );
};

export default DataTable;