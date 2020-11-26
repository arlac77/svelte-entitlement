<script>
  import { EntitlementBadge, Entitlement } from "../../../src/index.svelte";

  const e1 = new Entitlement({ cn: "all" });
  const e2 = new Entitlement("other");
</script>

<h1>Example</h1>
<EntitlementBadge entitlement={e1} />
<EntitlementBadge entitlement={e2} />
