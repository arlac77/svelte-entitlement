import { Selector } from "testcafe";

const base = "http://localhost:3000/services/svelte-entitlement/";

fixture`Entitlement`.page`${base}index.html`;

test("visible", async t => {
  const title = Selector(".entitlement");
  await t.expect(title.innerText).contains("e1");
});
