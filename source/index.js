import './style.css';
import moment from 'moment';

const api = () => import(/* webpackChunkName: "api" */ './api');

const folder = 'source';

console.log(`index.js under ${folder}`);

const user = { id: '1', name: 'Aaron' };

console.log(user?.gender ?? 'male');

console.log(moment());

const button = document.querySelector('button');
button.addEventListener('click', () => {
  api().then(({ fetchTodos }) => {
    fetchTodos().then((resp) => console.log(resp));
  });
});
