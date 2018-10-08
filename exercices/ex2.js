function calcUrl(op, a, b) {
    return '/' + op + '/' + a + (b !== undefined ? ('/' + b) : '');
}

const A = 15;
const B = 39;

$.get(calcUrl('mul', A, A), 
r1 => $.get(calcUrl('mul', B, B),
    r2 => $.get(calcUrl('add', r1.result, r2.result),
        r3 => $.get(calcUrl('sqrt', r3.result),
            r4 => tp.print(r4.result)
        )
    )
)
);
