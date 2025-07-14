const { darkLightMode } = require('./clamps');

describe('darkLightMode function', () => {
    test('body of the page turns black', () => {
        expect(darkLightMode().toBe(body.style.backgroundColor = 'black'))
    });

    test('text of body of the page turns white', () => {
        expect(darkLightMode().toBe(body.style.color = "white"))
    });

    test('divs of the page turn black', () => {
        expect(darkLightMode().toBe(div.style.backgroundColor = 'black'))
    });
});
