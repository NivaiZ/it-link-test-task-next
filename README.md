# Тестовое задание для компании ИТ-ЛИНК с использованием Atomic Design

В рамках тестового задания нужно было переписать код, реализуя принцип атомарного дизайна с использованием Next.js и TypeScript. Цель состоит в создании переиспользуемых и инкапсулированных компонентов, следуя методологии атомарного дизайна.

<pre>
import { useState } from "react";

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const Text = ({ children, ...props }) => <span {...props}>{children}</span>;

const ButtonText = ({ children, ...props }) => (
  <Button {...props}>
    <Text>{children}</Text>
  </Button>
);

const ButtonIncrement = () => {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);
  return (
    <>
      <Text>{index}</Text>
      <ButtonText onClick={increment}>increment</ButtonText>
      <ButtonText onClick={decrement}>decrement</ButtonText>
    </>
  );
};
</pre>

## Содержание

- [Введение](#введение)
- [Атомарный дизайн](#атомарный-дизайн)
  - [Атомы](#атомы)
  - [Молекулы](#молекулы)
  - [Организмы](#организмы)
- [Технологический стек](#технологический-стек)
- [Преимущества атомарного дизайна](#преимущества-атомарного-дизайна)
- [Начало работы](#начало-работы)
- [Структура проекта](#структура-проекта)

## Введение

Атомарный дизайн - это методология создания дизайн-систем, которая разбивает интерфейс на более мелкие, переиспользуемые компоненты. Такой подход способствует консистентности и масштабируемости в разработке пользовательских интерфейсов.

## Атомарный дизайн

Атомарный дизайн состоит из пяти уровней:

1. **Атомы**: Основные строительные блоки дизайна, такие как кнопки, поля ввода и ярлыки.
2. **Молекулы**: Группы атомов, объединенные вместе и функционирующие как единое целое. Например, поле формы с ярлыком и вводом.
3. **Организмы**: Сложные компоненты, состоящие из молекул и атомов, которые формируют более крупные части интерфейса.

## Технологический стек

- **Next.js**
- **React**
- **TypeScript**

## Преимущества атомарного дизайна

1. **Переиспользуемость**: Компоненты создаются таким образом, чтобы их можно было использовать в различных частях приложения.
2. **Поддерживаемость**: Легче поддерживать и обновлять маленькие, независимые компоненты.
3. **Консистентность**: Единообразие в дизайне достигается за счет использования одних и тех же компонентов.
4. **Масштабируемость**: Проект легко расширять благодаря модульной структуре компонентов.

## Начало работы

1. Клонируйте репозиторий: `git clone https://github.com/NivaiZ/it-link-test-task.git`
2. Установите зависимости: `npm install`
3. Запустите проект: `npm run dev`

## Структура проекта

it-link-test-task-next/<br>
├── public/<br>
├── src/<br>
│   └── app/<br>
│       └── page.tsx<br>
├── .eslintrc.json<br>
├── .gitignore<br>
├── README.md<br>
├── next.config.mjs<br>
├── package-lock.json<br>
├── package.json<br>
├── tsconfig.json<br>
