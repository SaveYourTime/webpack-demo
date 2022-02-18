import './style.css';

const folder = 'source';

console.log(`index.js under ${folder}`);

const user = { id: '1', name: 'Aaron' };

console.log(user?.gender ?? 'male');
