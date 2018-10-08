function operation(op, a, b) {
    return new Promise((resolve, reject) => {
        $.get(
            '/' + op + '/' + a + '/' + b,
            data => resolve(data.result)
     );
    });
}

operation('add', 777, 888).then(r => tp.print(r));
