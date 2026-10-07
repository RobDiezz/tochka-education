'use strict';
const programs = [
 {id:'math-school',subject:'Математика',title:'Математика',level:'school',grade:'7–9 класс',grades:[7,8,9],description:'Разбираемся в алгебре и геометрии, укрепляем основу и учимся рассуждать.',topics:['Дроби, выражения и уравнения','Геометрия и работа с чертежами','Разбор школьных задач и ошибок']},
 {id:'russian-school',subject:'Русский язык',title:'Русский язык',level:'school',grade:'7–9 класс',grades:[7,8,9],description:'Находим логику в правилах, тренируем грамотность и работу с текстом.',topics:['Орфография и пунктуация','Структура предложения','Понимание текста и письменная практика']},
 {id:'english-school',subject:'Английский язык',title:'Английский язык',level:'school',grade:'7–9 класс',grades:[7,8,9],description:'Закрепляем грамматику и учимся применять язык в речи и на письме.',topics:['Грамматика в контексте','Чтение и понимание на слух','Разговорная и письменная практика']},
 {id:'math-oge',subject:'Математика',title:'Математика · ОГЭ',level:'oge',grade:'9 класс',grades:[9],description:'Систематизируем знания и последовательно разбираем задания экзамена.',topics:['Алгебра и геометрия в формате экзамена','Задачи с развёрнутым ответом','Практика и анализ ошибок']},
 {id:'russian-oge',subject:'Русский язык',title:'Русский язык · ОГЭ',level:'oge',grade:'9 класс',grades:[9],description:'Работаем с текстом, изложением и сочинением, повторяем правила.',topics:['Сжатое изложение','Сочинение и аргументация','Орфография, пунктуация и задания по тексту']},
 {id:'math-ege',subject:'Математика',title:'Профильная математика · ЕГЭ',level:'ege',grade:'10–11 класс',grades:[10,11],description:'От базовых приёмов к сложным задачам: теория, практика и ход решения.',topics:['Функции, уравнения и неравенства','Планиметрия и стереометрия','Задания с развёрнутым решением']},
 {id:'russian-ege',subject:'Русский язык',title:'Русский язык · ЕГЭ',level:'ege',grade:'10–11 класс',grades:[10,11],description:'Повторяем систему языка и учимся ясно формулировать мысли в сочинении.',topics:['Нормы языка и анализ текста','Структура сочинения','Аргументация и редактура']},
 {id:'society-ege',subject:'Обществознание',title:'Обществознание · ЕГЭ',level:'ege',grade:'10–11 класс',grades:[10,11],description:'Связываем понятия с примерами и учимся строить точные ответы.',topics:['Общество, экономика и политика','Право и социальные отношения','Развёрнутые ответы и работа с примерами']},
 {id:'physics-ege',subject:'Физика',title:'Физика · ЕГЭ',level:'ege',grade:'10–11 класс',grades:[10,11],description:'Понимаем физические закономерности и применяем их при решении задач.',topics:['Механика и законы сохранения','Электричество и термодинамика','Моделирование задач и оформление решения']}
];
const faq = [
 ['Как понять, какая программа подходит?','Начните с класса и предмета. В сценарии знакомства мы уточняем, какие темы вызывают сложности и что сейчас важнее: школьная программа или экзамен. По этим задачам подбирается направление.'],
 ['Можно ли заниматься онлайн?','Да, предусмотрен онлайн-формат: занятие проходит в реальном времени с преподавателем и группой. Ученик может задавать вопросы, обсуждать решения и получать обратную связь.'],
 ['Что делать, если у ребёнка есть пробелы за прошлые годы?','Сначала определяем, какие базовые темы мешают двигаться дальше. Возвращаемся к ним и закрепляем материал на практике, затем постепенно переходим к текущей программе.'],
 ['Можно ли поменять группу?','Если темп или уровень группы не подходят, это можно обсудить с преподавателем. В демонстрационном сценарии подбирается другой формат с учётом задач ученика.'],
 ['Есть ли индивидуальные занятия?','Да, предусмотрен индивидуальный формат. Он позволяет выбирать темп, подробнее останавливаться на сложных темах и строить программу вокруг текущих задач ученика.'],
 ['Как проходит подготовка к ОГЭ и ЕГЭ?','Последовательно повторяем теорию, разбираем типы заданий и отрабатываем их на практике. Отдельно обсуждаем ошибки и оформление ответов, чтобы ученик понимал ход решения.']
];
const grid = document.querySelector('#program-grid');
const subjectFilter = document.querySelector('#subject-filter');
const filterButtons = [...document.querySelectorAll('[data-level]')];
let level = 'all';
function matchesLevel(p) { return level === 'all' || (level === 'junior' && p.grades.some(g => g <= 9)) || (level === 'senior' && p.grades.some(g => g >= 10)) || (level === 'school' && p.level === 'school') || p.level === level; }
function renderPrograms() {
 const list = programs.filter(p => matchesLevel(p) && (subjectFilter.value === 'all' || p.subject === subjectFilter.value));
 grid.replaceChildren();
 list.forEach(p => {
  const card = document.createElement('article'); card.className = 'program-card';
  card.innerHTML = `<div class="card-top"><span class="card-type">${p.level === 'school' ? 'ШКОЛЬНАЯ ПРОГРАММА' : p.level === 'oge' ? 'ОГЭ' : 'ЕГЭ'}</span><span class="card-index">${String(programs.indexOf(p)+1).padStart(2,'0')}</span></div><h3>${p.title}</h3><p>${p.description}</p><div class="card-meta"><span>${p.grade}</span><span>В группе</span><span>2 раза в неделю</span></div><button class="card-button" data-program="${p.id}" aria-label="Подробнее: ${p.title}">Подробнее <span aria-hidden="true">↗</span></button>`;
  grid.append(card);
 });
 document.querySelector('#empty-state').hidden = list.length > 0;
 document.querySelector('#program-count').textContent = `Найдено программ: ${list.length} из ${programs.length}`;
}
function setLevel(value) { level = value; filterButtons.forEach(b => {const active = b.dataset.level === value; b.classList.toggle('active',active); b.setAttribute('aria-pressed',String(active));}); renderPrograms(); }
filterButtons.forEach(b => b.addEventListener('click',() => setLevel(b.dataset.level)));
subjectFilter.addEventListener('change',renderPrograms);
document.querySelector('#reset-filters').addEventListener('click',() => {subjectFilter.value='all';setLevel('all');filterButtons[0].focus();});
document.querySelectorAll('[data-level-link]').forEach(a => a.addEventListener('click',() => {subjectFilter.value='all';setLevel(a.dataset.levelLink === 'school' ? 'junior' : a.dataset.levelLink);}));
renderPrograms();
const dialog = document.querySelector('#program-dialog');
const menu = document.querySelector('#mobile-menu');
const toggle = document.querySelector('.menu-toggle');
let currentProgram, programTrigger;
function lockScroll() { document.body.classList.toggle('scroll-locked',dialog.open || menu.open); }
grid.addEventListener('click',event => {
 const button = event.target.closest('[data-program]'); if (!button) return;
 currentProgram = programs.find(p => p.id === button.dataset.program); programTrigger = button;
 document.querySelector('#dialog-title').textContent = currentProgram.title;
 document.querySelector('#dialog-meta').textContent = `${currentProgram.grade} · В группе · 2 раза в неделю`;
 document.querySelector('#dialog-description').textContent = currentProgram.description;
 document.querySelector('#dialog-topics').replaceChildren(...currentProgram.topics.map(t => {const li = document.createElement('li');li.textContent=t;return li;}));
 dialog.showModal();lockScroll();document.querySelector('#close-dialog').focus();
});
document.querySelector('#close-dialog').addEventListener('click',() => dialog.close());
dialog.addEventListener('close',() => {lockScroll();if(programTrigger?.isConnected) programTrigger.focus({preventScroll:true});});
[dialog,menu].forEach(d => d.addEventListener('click',event => {if(event.target !== d) return;const r=d.getBoundingClientRect();if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom)d.close();}));
document.querySelector('#choose-program').addEventListener('click',() => {
 document.querySelector('#subject').value = currentProgram.subject;
 document.querySelector('#grade').value = String(currentProgram.grades[0]);
 document.querySelector('#comment').value = `Интересует программа «${currentProgram.title}».`;
 dialog.close();document.querySelector('#contact').scrollIntoView();requestAnimationFrame(() => document.querySelector('#name').focus({preventScroll:true}));
});
toggle.addEventListener('click',() => {menu.showModal();toggle.setAttribute('aria-expanded','true');lockScroll();menu.querySelector('button').focus();});
document.querySelector('[data-close-menu]').addEventListener('click',() => menu.close());
let menuDestination = null;
menu.querySelectorAll('a').forEach(a => a.addEventListener('click',() => {menuDestination = document.querySelector(a.getAttribute('href'));menu.close();}));
menu.addEventListener('close',() => {toggle.setAttribute('aria-expanded','false');lockScroll();if(menuDestination){const destination=menuDestination;menuDestination=null;destination.setAttribute('tabindex','-1');destination.focus({preventScroll:true});destination.addEventListener('blur',()=>destination.removeAttribute('tabindex'),{once:true});}else toggle.focus({preventScroll:true});});
window.matchMedia('(min-width:901px)').addEventListener('change',e => {if(e.matches && menu.open)menu.close();});
faq.forEach(([question,answer],i) => {
 const article=document.createElement('article');
 article.innerHTML=`<h3><button class="faq-button" id="faq-button-${i}" aria-expanded="false" aria-controls="faq-answer-${i}">${question}<span aria-hidden="true">+</span></button></h3><div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-button-${i}" hidden>${answer}</div>`;
 const button=article.querySelector('button'),panel=article.querySelector('.faq-answer');
 button.addEventListener('click',() => {const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));panel.hidden=expanded;button.querySelector('span').textContent=expanded?'+':'−';});
 document.querySelector('.faq-items').append(article);
});
const form=document.querySelector('#contact-form');
const nameInput=document.querySelector('#name'),contactInput=document.querySelector('#contact-input');
function validate(input) {
 let error='';const value=input.value.trim();
 if(input===nameInput && value.length<2)error='Введите имя: минимум 2 символа.';
 if(input===contactInput){const email=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;const phone=/^\+?[\d\s()\-]+$/;const digits=value.replace(/\D/g,'');if(!email.test(value) && !(phone.test(value) && digits.length>=10 && digits.length<=15))error='Введите корректный e-mail или телефон (10–15 цифр).';}
 input.setAttribute('aria-invalid',String(Boolean(error)));
 document.querySelector(input===nameInput?'#name-error':'#contact-error').textContent=error;
 return !error;
}
[nameInput,contactInput].forEach(input => input.addEventListener('input',() => {document.querySelector('#form-status').textContent='';if(input.getAttribute('aria-invalid')==='true')validate(input);}));
form.addEventListener('submit',event => {
 event.preventDefault();const results=[validate(nameInput),validate(contactInput)];
 if(results.some(v=>!v)){document.querySelector('#form-status').textContent='Проверьте отмеченные поля.';(!results[0]?nameInput:contactInput).focus();return;}
 form.reset();[nameInput,contactInput].forEach(input=>input.removeAttribute('aria-invalid'));
 document.querySelector('#form-status').textContent='Готово! Демонстрационный сценарий завершён. Заявка не отправлена, данные не сохранены. В реальном центре следующим шагом было бы знакомство и обсуждение программы.';
});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !reducedMotion.matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.direction-grid article,.teacher-grid article,.format-grid article,.process-grid li').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
 reducedMotion.addEventListener('change',e=>{if(e.matches){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));observer.disconnect();}});
}
// Keep focus within each modal, including browsers that expose a focus sentinel.
[dialog,menu].forEach(modal => modal.addEventListener('keydown',event => {
 if(event.key!=='Tab')return;
 const items=[...modal.querySelectorAll('button,a[href],input,select,textarea,[tabindex="0"]')].filter(el=>!el.disabled && el.getClientRects().length);
 const first=items[0],last=items[items.length-1];
 if(event.shiftKey && (document.activeElement===first || !modal.contains(document.activeElement))){event.preventDefault();last.focus();}
 else if(!event.shiftKey && (document.activeElement===last || !modal.contains(document.activeElement))){event.preventDefault();first.focus();}
}));
