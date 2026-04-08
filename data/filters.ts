export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterGroup {
  id: string;
  title: string;
  type: 'range' | 'checkbox' | 'checkbox-group';
  options?: FilterOption[];
  min?: number;
  max?: number;
}

export const filterGroups: FilterGroup[] = [
  { id: 'price', title: 'Цена за месяц', type: 'range', min: 5, max: 500 },
  { id: 'setup', title: 'Бесплатная установка', type: 'checkbox' },
  {
    id: 'panel',
    title: 'Control Panel',
    type: 'checkbox-group',
    options: [
      { value: 'cpanel', label: 'cPanel' },
      { value: 'directadmin', label: 'DirectAdmin' },
      { value: 'ispmanager', label: 'ISPmanager' },
    ],
  },
  {
    id: 'os',
    title: 'Операционная система',
    type: 'checkbox-group',
    options: [
      { value: 'linux', label: 'Linux' },
      { value: 'windows', label: 'Windows' },
      { value: 'freebsd', label: 'FreeBSD' },
    ],
  },
  {
    id: 'country',
    title: 'Страна',
    type: 'checkbox-group',
    options: [
      { value: 'de', label: 'Германия' },
      { value: 'nl', label: 'Нидерланды' },
      { value: 'us', label: 'США' },
      { value: 'ee', label: 'Эстония' },
      { value: 'ru', label: 'Россия' },
    ],
  },
  {
    id: 'cpu',
    title: 'Процессор',
    type: 'checkbox-group',
    options: [
      { value: 'xeon', label: 'Intel Xeon' },
      { value: 'core', label: 'Intel Core' },
      { value: 'ryzen', label: 'AMD Ryzen' },
    ],
  },
];
