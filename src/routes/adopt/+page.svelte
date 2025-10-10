
<script>

const contacts = [
  ["918408927603", "Alka", "red"],
  ["918390030197", "Aman", "peach"],
  ["919822399608", "Nandini", "yellow"],
  ["917774995276", "Manasi", "green"],
  ["918010825610", "Abha", "blue"],
]

</script>

<body>
  <div id="Wrapper" class="container">
  <div id="AdoptContents" class="container column">
    <h1>
      ~ adopting a pet
    </h1>
    <p>
    Adopting a pet is a significant and rewarding decision that requires careful planning and consideration.<br>
    As a pet parent, you will be financially and physically responsible for:
      <ol>
        <li> Managing your pet's healthcare: vaccinations, sterilization, check-ups, surgeries </li>
        <li> Providing a healthy diet </li>
        <li> General wellbeing and safety: walks, grooming, playtime </li>
      </ol>
    You can contact us on whatsapp:
    <div class="container row" id="Contacts">
        {#each contacts as item}
          <a href="https://wa.me/{item[0]}" style="background-color: var(--{item[2]})">{item[1]}</a>
        {/each}
    </div>
  </div>
  </div>
</body>

<style>

#AdoptContents {
  justify-content: center;
  padding: 20px;
}

h1 {
  font-size: 18pt;
  color: var(--yellow);
}

p {
  max-width: 1000px;
  text-align: left; 
  gap: 10px;
}

#Wrapper {
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

div > a {
  color: var(--crust);
  border: 1px solid var(--crust);
  border-radius: 5px;
  padding: 2px 5px;
  width: 100px;
  text-align: center;
  text-decoration: none;
}

#Contacts {
  gap: 10px;
  padding: 20px 0;
  flex-wrap: wrap;
}


</style>
