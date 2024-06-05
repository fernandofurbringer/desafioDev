import { useState, useEffect } from 'react';

const useEditableData = (initialData) => {
  const [editableData, setEditableData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      setEditableData(JSON.parse(savedData));
    } else {
      setEditableData(initialData);
    }
  }, [initialData]);

  const handleEdit = (e, rowIndex, colIndex) => {
    const newData = [...editableData];
    newData[rowIndex][Object.keys(newData[rowIndex])[colIndex]] = e.target.innerText;
    setEditableData(newData);
  };

  const handleSave = () => {
    localStorage.setItem('tableData', JSON.stringify(editableData));
    alert('Dados salvos!');
  };

  const handleClear = () => {
    localStorage.removeItem('tableData');
    setEditableData(initialData);
    alert('Dados limpos!');
  };

  return {
    editableData,
    handleEdit,
    handleSave,
    handleClear,
  };
};

export default useEditableData;