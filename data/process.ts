export interface ProcessStep {
  number: string;
  title: string;
  text: string;
  icon: string;
}

export const orderSteps: ProcessStep[] = [
  { number: '01', title: 'Выбираете сервер', text: 'Выбирайте из более 1278 конфигураций подходящий сервер', icon: 'search' },
  { number: '02', title: 'Оформляете заказ', text: 'Заполните форму заказа — это займёт не более 2 минут', icon: 'edit' },
  { number: '03', title: 'Оплачиваете', text: 'Оплатите удобным способом: карта, QIWI, криптовалюта', icon: 'payments' },
  { number: '04', title: 'Получаете доступ', text: 'Доступ к серверу открывается через 3-5 минут после оплаты', icon: 'server' },
];
