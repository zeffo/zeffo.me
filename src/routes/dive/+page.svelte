<script>

let certs = [
  ["Open Water", "09 May 2025"],
  ["Advanced Open Water", "27 Oct 2025"],
  ["Enriched Air", "27 Oct 2025"]
];

</script>


<style>
  h1 {
    font-size: 24pt;
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(45deg, var(--sky), var(--blue));
  }

  .contents {
      justify-content: flex-start;
  }

  table {
    border: 1px solid var(--overlay0);
    border-collapse: collapse;
  }

  tr {
    border: 1px solid var(--overlay0);
  }

  td {
    padding: 10px;
    border: 1px solid var(--overlay0);
  }


</style>

<div class="contents">
  <h1> Divelog </h1>
  <!-- TODO: scrape padi divelog -->
  <!-- TODO: add padi certs -->

  <h2> Certifications </h2>

  <table>
    <tbody>
      {#each certs as cert}
        <tr>
          <td>{cert[0]}</td>
          <td>{cert[1]}</td>
        </tr> 
      {/each}
    </tbody>
  </table>

  <h2> Logbook </h2>

  *coming soon
  
</div>
