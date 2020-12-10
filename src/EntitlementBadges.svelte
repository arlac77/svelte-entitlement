<script>
  import { dndzone } from "svelte-dnd-action";
  import EntitlementBadge from "./EntitlementBadge.svelte";
  import { Entitlement } from "./Entitlement.mjs";

  export let entitlements;
  function handleDndConsider(e) {
    entitlements = e.detail.items.map(i => new Entitlement(i.id));
  }
  function handleDndFinalize(e) {
    entitlements = e.detail.items.map(i => new Entitlement(i.id));
  }
</script>

<style>
  section {
    width: 50%;
    padding: 0.3em;
    border: 1px solid var(--primary-color-200);
    overflow: scroll;
    height: 100px;
  }
</style>

<section
  use:dndzone={{ type: 'entitlement', items: entitlements }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}>
  {#each entitlements as entitlement (entitlement.id)}
    <EntitlementBadge {entitlement} />
  {/each}
</section>
