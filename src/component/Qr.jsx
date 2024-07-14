import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ value1, value2, value3, value4 }) => {
  value1 = "123";
  value2 = "456";
  value3 = "789";
  value4 = "abc";
  const qrValue = `${value1}-${value2}-${value3}-${value4}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={styles.container}>
      <div style={styles.qrContainer}>
        <QRCode value={qrValue} size={256} />
      </div>
      <button style={styles.printButton} onClick={handlePrint}>
        Print QR Code
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  qrContainer: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  printButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default QRCodeGenerator;
