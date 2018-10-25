import {
    Selector
} from 'testcafe'; // first import testcafe selectors

fixture `Chat App End to End Testing` // declare the fixture
    .page `https://rajachatapp.herokuapp.com/`; // specify the start page


//then create a test and place your code there
test('Login', async t => {
    await t
        .typeText("[name='name']", "James")
        .typeText("[name='room']", "1")
        .click("#Join")

    // Use the assertion to check if the actual header text is equal to the expected one
    // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test
    .page `https://rajachatapp.herokuapp.com/chat.html?name=James&room=1`
    ('Chat room entry', async t => {
        // Starts at http://devexpress.github.io/testcafe/blog/
        await t
            .typeText("[name='message']", "Hey All")
            .pressKey('enter')
            .typeText("[name='message']", "This is James!")
            .pressKey('enter')
            .typeText("[name='message']", "How is it going?!")
            .pressKey('enter')
            .wait(3000)
            .typeText("[name='message']", "See you all later!")
            .pressKey('enter')
            .wait(1000)
    });
