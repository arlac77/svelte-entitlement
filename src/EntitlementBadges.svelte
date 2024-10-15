<script>
  import { dndzone } from "svelte-dnd-action";
  import EntitlementBadge from "./EntitlementBadge.svelte";
  import { Entitlement } from "./entitlement.mjs";

  let { entitlements } = $props();

  function handleDndConsider(e) {
    entitlements = e.detail.items.map(i => new Entitlement(i.id));
  }
  function handleDndFinalize(e) {
    entitlements = e.detail.items.map(i => new Entitlement(i.id));
  }
</script>

<section
  use:dndzone={{ type: "entitlement", items: entitlements }}
  onconsider={handleDndConsider}
  onfinalize={handleDndFinalize}
>
  {#each entitlements as entitlement (entitlement.id)}
    <EntitlementBadge {entitlement} />
  {/each}
</section>
