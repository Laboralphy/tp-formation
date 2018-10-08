function somme(a, b) {
    return new Promise((resolve, reject) => {
        $.get(
            '/add/' + a + '/' + b,
            data => resolve(data.result)
     );
    });
}

somme(777, 888).then(r => tp.print(r));
