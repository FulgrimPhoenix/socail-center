const serviceCard = document.querySelector('#service').content;
const spaceForService = document.querySelector('.service__space');

const serviceList = [
  {
    title: 'Cлужба сопровождения замещающих семей',
    src: './images/service/1.jpg',
    href: '',
    discription: `Деятельность службы направлена на получение ответов на самые важные вопросы, 
    в том числе: понимание физиологических особенностей ребенка и детской психологии; подготовка к возможным проблемам в приемной 
    семье, изучение вариантов их минимизации; оказание эмоциональной помощи и поддержки будущим маме и папе.`
  },
  {
    title: 'Cлужба сопровождения замещающих семей',
    src: './images/service/1.jpg',
    href: '',
    discription: `Деятельность службы направлена на получение ответов на самые важные вопросы, 
    в том числе: понимание физиологических особенностей ребенка и детской психологии; подготовка к возможным проблемам в приемной 
    семье, изучение вариантов их минимизации; оказание эмоциональной помощи и поддержки будущим маме и папе.`
  },
  {
    title: '',
    src: '',
    href: '',
    discription: ''
  }
]

function addServiceCard (item) {
  const serviceCardElements = serviceCard.querySelector('.service__item').cloneNode(true);
  const serviceCardTitle = serviceCardElements.querySelector('.service__title');
  const serviceCardImage = serviceCardElements.querySelector('.service__image');
  const serviceCardRef = serviceCardElements.querySelector('.service__link');
  const serviceCardDiscription = serviceCardElements.querySelector('.service__paragraph');

  serviceCardTitle.textContent = item.title;
  serviceCardImage.src = item.src;
  serviceCardRef.href = item.href;
  serviceCardDiscription.textContent = item.discription;
  return serviceCardElements
}

serviceList.forEach(item => spaceForService.append(addServiceCard(item)))