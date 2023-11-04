export const messageGenerator = (score, total) => {
  const percentage = score / total;

  if (percentage === 1)
    return '¡Perfecto! Dominas todas las banderas de esta región.';

  if (percentage >= 0.7 && percentage < 1)
    return '¡Excelente! Sabes mucho sobre banderas.';

  if (percentage < 0.7 && percentage >= 0.5)
    return '¡Muy buen trabajo! Sigue practicando para mejorar.';

  if (percentage < 0.5 && percentage)
    return 'Tienes que mejorar. Vuelve a intentarlo.'
}