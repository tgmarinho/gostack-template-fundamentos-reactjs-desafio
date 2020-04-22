const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(new Date(date));

export default formatDate;
