export function getWeekData() {
    // Obter a data atual
    const actualDate = new Date();
  

  
    // Obter informações para cada dia da semana
    const weekInfo = [];
    for (let i = 0; i < 7; i++) {
      // Calcular a data para o dia da semana atual
      const dateForTheDayWeek = new Date(actualDate);


      const index = (dateForTheDayWeek.getDay() + i) % 7; // Ajuste para o índice correto

      dateForTheDayWeek.setDate(actualDate.getDate() + i);
  
      // Obter informações
      const indexDay = index;
      const numberOfMonth = (dateForTheDayWeek.getMonth() + 1).toString().padStart(2, '0');
      const dayOfMonth = dateForTheDayWeek.getDate().toString().padStart(2, '0');
  
      // Adicionar as informações ao array
      weekInfo.push({
        indexDay,
        numberOfMonth,
        dayOfMonth
      });
    }
  
    return weekInfo;
  }
  

  