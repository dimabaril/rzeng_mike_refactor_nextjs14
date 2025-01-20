// Функция для генерации последовательного цвета
function getSequentialColor(index: number, totalColors: number) {
  const step = Math.floor(255 / (totalColors - 1)); // Шаг изменения цвета
  const value = index * step;
  return `rgb(${value}, ${value}, ${value})`;
}

// Функция для генерации списка цветов
function generateColors(colorCount: number): string[] {
  const colors = [];
  for (let i = 0; i < colorCount; i++) {
    colors.push(getSequentialColor(i, colorCount));
  }
  for (let i = colorCount; i > 0; i--) {
    colors.push(getSequentialColor(i, colorCount));
  }
  return colors;
}

function generateGradient() {
  const colors = generateColors(10);

  let gradient = "repeating-linear-gradient(0deg, ";
  let position = 0;
  const smoothness = 2; // Сглаживание перехода

  for (let i = 0; i < colors.length; i++) {
    const size = Math.floor(Math.random() * 10) + 20; // Размер от 20px до 70px
    const gap = Math.floor(Math.random() * 5) + 7; // Промежуток от 10px до 40px
    gradient += `${colors[i]} ${position}px, ${colors[i]} ${position + size}px, `;
    position += size + smoothness;
    gradient += `transparent ${position}px, transparent ${position + gap}px, `;
    position += gap + smoothness;
  }

  // Удаляем последнюю запятую и пробел, затем добавляем закрывающую скобку
  gradient = gradient.slice(0, -2) + ")";
  return gradient;
}

export default generateGradient;
