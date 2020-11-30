<script>
  import { dndzone } from "svelte-dnd-action";
  import EntitlementBadge from "./EntitlementBadge.svelte";

  export let entitlements;
  const flipDurationMs = 300;
  function handleDndConsider(e) {
    //console.log("handleDndConsider",e.detail.items);
    entitlements = e.detail.items;
  }
  function handleDndFinalize(e) {
    //console.log("handleDndFinalize",e.detail.items);
    entitlements = e.detail.items;
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
  use:dndzone={{ transformDraggedElement: (...args) => {
      console.log(...args);
    }, type: 'entitlement', items: entitlements, flipDurationMs }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}>
  {#each entitlements as entitlement (entitlement.id)}
    <EntitlementBadge {entitlement} />
  {/each}
</section>
