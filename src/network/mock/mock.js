let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = () => {
  let data = {
    eva: {
      "score": 0,
      "list":[]
    }
  };
  data.eva.score = Random.natural(0, 5);
  for (let i = 1; i <= 20; i++) {
    let content = Random.cparagraph(1, 3);
    let name = Random.cname()
    let img = Random.image('120x120', '#cccccc', name.charAt(0))
    data.eva.list.push({
      id: i,
      name: name,
      desc: content.substr(0, 40),
      tag: Random.cword(2, 6),
      date: Random.date('yyyy-MM-dd'),
      views: Random.integer(100, 5000),
      img : img
    })
  }
  return data
}