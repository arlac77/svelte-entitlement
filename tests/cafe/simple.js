import { Selector } from "testcafe";

const base = "http://localhost:5000";

fixture`Entitlement`.page`${base}/index.html`;

test("visible", async t => {
  const title = Selector(".entitlement");
  await t.expect(title.innerText).eql("all");
});
