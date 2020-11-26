import { Selector } from "testcafe";

fixture`Entitlement`.page`/`;

test("visible", async t => {
  const title = Selector(".entitlement");
  await t.expect(title.innerText).eql("all");
});
