<script>
export let key;
export let value;
export let color;
</script>

<div class="tag container row" style="--color: var(--{color})">
  <div class="key">
    {key}
  </div>
  <div class="value">
    {value}
  </div>
</div>


<style>

.tag {
  border-radius: 5px;
}

.tag > div {
  color: var(--color);
  text-align: center;
  padding: 0 15px;
}

.tag > div:first-child {
  color: var(--crust);
  background-color: var(--color);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.tag > div:last-child {
  color: var(--color);
  border: 1px solid var(--color);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

</style>
