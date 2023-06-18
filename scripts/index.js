//ПЕРЕМЕННЫЕ
const newsLine = document.querySelector('.news__line');
const serviceCard = document.querySelector('#service').content;
const spaceForService = document.querySelector('.service__space');
let offset = 0;
let x1 = null;
let y1 = null;

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
    title: 'Cлужба содействия семье и детям',
    src: './images/service/2.png',
    href: '',
    discription: `Главной целью службы содействия семье и детям является организация и реализация 
    комплекса социально-реабилитационных мероприятий с биологическими родителями, родственниками 
    воспитанников по формированию их положительной мотивации на восстановление детско-родительских отношений.`
  },
  {
    title: 'Служба постинтернатного сопровождения выпускников',
    src: './images/service/3.jpg',
    href: '',
    discription: `Отдел постинтернатного сопровождения выпускников специализируется 
    на работе с детьми от 14 до 23 лет. Мы оказываем помощь в адаптации, социализации и 
    профориентации подросткам, вставшим на порог двери во взрослую жизнь. Помогаем выстроить 
    правильную мотивацию и наметить жизненные ориентиры, а также проводим сопровождение на 
    юридическом уровне по правам человека и другим вопросам.`
  },
  {
    title: 'Служба комплексной помощи семье и детям в условиях стационара',
    src: './images/service/4.png',
    href: '',
    discription: `Служба комплексной помощи детям оказывает услуги по социально- 
    психолого-педагогическому сопровождению, социализации, интеграции воспитанников 
    центра в социум (восстановление утраченных и завязывание новых социальных связей), 
    а также коррекции и реабилитации несовершеннолетних.`
  },
  {
    title: 'Участковая социальная служба',
    src: './images/service/5.jpg',
    href: '',
    discription: `Основной целью участковой социальной службы является 
    раннее выявление семейного неблагополучия и обеспечение взаимодействия 
    всех ведомств и служб для выведения семьи из трудной жизненной ситуации 
    или социально-опасного положения.`
  },
  {
    title: 'Медицинская служба',
    src: './images/service/6.jpg',
    href: '',
    discription: `Основной деятельностью медицинских работников семейного центра 
    является оказание первичной медико-санитарной помощи, в том числе: первичная 
    доврачебная и врачебная медико-санитарная помощь в амбулаторных условиях по 
    сестринскому делу в педиатрии; первичная специализированная медико-санитарная 
    помощь в амбулаторных условиях по детской неврологии и детской стоматологии;  
    проведение медицинских осмотров (предсменных, предрейсовых, послесменных, 
    послерейсовых). `
  }
]
//ФУНКЦИИ 
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

function handleTouchStart(event) {
  const touch = event.touches[0];
  console.log(touch);
  let x1 = touch.clientX;
}

function handleTouchMove (event) {
  
  let x2 = event.touches[0].clientX;
  let xDiff = x1 - x2;

  if (xDiff > 0){
    offset = offset - 256;
    newsLine.style.left = offset + 'px';
    console.log('right');
  }else if (xDiff < 0){
    offset = offset + 256;
    newsLine.style.left = offset + 'px';
    console.log('left');
  }
   x1 = null;
   xDiff = null;
}
//ФУНКЦИОНАЛ
serviceList.forEach(item => spaceForService.append(addServiceCard(item)));
newsLine.addEventListener('touchstart', handleTouchStart, false);
newsLine.addEventListener('touchmove', handleTouchMove, false);
