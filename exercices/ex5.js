function operation(op, a, b) {
    return new Promise((resolve, reject) => {
        if (['add', 'mul', 'sub', 'div', 'sqrt'].includes(op)) {
            $.get(
                '/' + op + '/' + a + '/' + b,
                data => resolve(data.result)
            );
        } else {
            reject('cette opération n\'existe pas : ' + op);
        }
    });
}

operation('plus', 777, 888)
    .then(r => tp.print(r))
    .catch(e => tp.print('ERREUR', e));
