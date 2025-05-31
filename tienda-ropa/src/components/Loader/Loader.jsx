const Loader = () => {
  return (
    <div className="loader" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh'
    }}>
      <div style={{
        border: '4px solid rgba(0, 0, 0, 0.1)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        borderLeftColor: '#000',
        animation: 'spin 1s linear infinite'
      }}></div>
    </div>
  );
};

export default Loader;