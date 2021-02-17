const FormatToReal = (value) => {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
};

export default FormatToReal;
