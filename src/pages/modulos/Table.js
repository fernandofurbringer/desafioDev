import React from 'react';
import styles from './style/Table.module.css';

const Table = ({ data, handleEdit }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div></div>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((value, colIndex) => (
              <td
                key={colIndex}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleEdit(e, rowIndex, colIndex)}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;