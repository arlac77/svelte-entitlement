<script>
  import { EntitlementBadges, Entitlement } from "../../../src/index.svelte";
  import {name,version} from "./constants.mjs";

  const e1 = new Entitlement({ cn: "e1" });
  const e2 = new Entitlement("e2");
  const e3 = new Entitlement("e3");

  const entitlements = [e1, e2];
  const entitlements2 = [e3];
</script>

<h1>{name} @{version}</h1>
<EntitlementBadges {entitlements} />
Into:
<EntitlementBadges entitlements={entitlements2} />
