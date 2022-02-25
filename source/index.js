import './style.css';
import moment from 'moment';

const folder = 'source';

console.log(`index.js under ${folder}`);

const user = { id: '1', name: 'Aaron' };

console.log(user?.gender ?? 'male');

console.log(moment());
