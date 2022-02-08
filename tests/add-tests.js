import add from "../add.js";
const { module, test } = QUnit;

module("add", function () {
  test("two numbers", (assert) => {
    assert.equal(add(1, 2), 3);
  });

  test("retorna erro quando recebe string como parametro", (assert) => {
    assert.equal(add('aviao', 2), 'Erro', 'retorna erro quando o primeiro parametro eh uma string');
    assert.equal(add(2, 'aviao'), 'Erro', 'retorna erro quando o segundo parametro eh uma string')
    assert.equal(add('asdasd', 'aviao'), 'Erro', 'retorna erro quando os dois parametros sao string')
  });
});
