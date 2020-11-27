<script>
  export let entitlement;
</script>

<style>
  .entitlement {
    display: inline-block;
    background-color: var(--primary-color-400);
    border-radius: 0.5em;
    padding: 0.2em;
    margin: 0.2em;
  }
</style>

<div class="entitlement">{entitlement.name}</div>
