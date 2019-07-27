const simulate = require('miniprogram-simulate');
const path = require('path');

test('components/user', (done) => {
  const id = simulate.load(path.join(__dirname, '../../components/user'));
  const component = simulate.render(id);

  const text = component.querySelector('.nickname');
  const button = component.querySelector('.button');
  button.dispatchEvent('getuserinfo', {
    detail: {
      userInfo: {
        nickName: 'hello',
      },
    },
  });
  setTimeout(() => {
    expect(text.dom.innerHTML).toBe('hello');
    done();
  }, 1000);
});
