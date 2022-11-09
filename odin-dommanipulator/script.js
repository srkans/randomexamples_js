const container = document.querySelector('#container');

const newparagraph = document.createElement('p');
newparagraph.classList.add('newparagraph');
newparagraph.textContent = 'Hey I\'m Red!';
newparagraph.style.cssText = 'color: red';

const subtext = document.createElement('h3');
subtext.classList.add('subtext');
subtext.textContent = 'I\'m a blue h3';
subtext.style.cssText = 'color:blue';

const newsection = document.createElement('div');
newsection.style.backgroundColor = 'pink';
newsection.style.borderColor = 'black';
newsection.style.padding ='5px';
newsection.style.border ='2px';
newsection.style.margin ='5px';

const prsmessage = document.createElement('h1');
prsmessage.textContent = 'I\'m in a div';

const altparagraph = document.createElement('p');
altparagraph.textContent = 'ME TOO';

newsection.appendChild(prsmessage);
newsection.appendChild(altparagraph);

container.appendChild(newparagraph);
container.appendChild(subtext);
container.appendChild(newsection);
