import puppeteer from 'puppeteer';
import config from './../bootstrap';

test('Creating a new note', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const app = config.index;
    await page.goto(app);

    let noteContent = 'This is a content of note'

    await page.click('input#create-note-content-input');
    await page.type('input#create-note-content-input', noteContent);
    await page.click('button#footer-close-btn');
    await page.waitForSelector('div#not-pinned-notes-container')
    
    let element = await page.$('div#not-pinned-notes-container')
    let value = await page.evaluate(el => el.textContent, element)
    let includeText = value.includes(noteContent)

    expect(includeText).toBe(true);
    await browser.close();
})

