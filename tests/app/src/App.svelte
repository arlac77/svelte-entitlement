<script>
  import { EntitlementBadge, Entitlement } from "../../../src/index.svelte";

  const entitlement = new Entitlement({ cn: "all" });
</script>

<h1>Example</h1>
<EntitlementBadge {entitlement} />
