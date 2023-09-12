let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

test("Check h1 content for the page pricing", async () => {
  await page.goto("https://github.com/pricing");
  await page.waitForSelector("h1");
  const title = await page.title();
  expect(title).toEqual("Pricing · Plans for every developer · GitHub");
}, 6000);

test("Check h1 content for the page explore", async () => {
  await page.goto("https://github.com/explore");
  await page.waitForSelector("h1");
  const title = await page.title();
  expect(title).toEqual("Explore GitHub · GitHub");
}, 7000);

test("Check h1 content for the page marketplace", async () => {
  await page.goto("https://github.com/marketplace");
  await page.waitForSelector("h1");
  const title = await page.title();
  expect(title).toEqual(
    "GitHub Marketplace · to improve your workflow · GitHub"
  );
}, 6000);

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  }, 6000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toMatch("Get started with Team");
  }, 6000);
});
