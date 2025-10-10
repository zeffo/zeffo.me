
<body>
  <div class="container column" id="Contents">
    <h1> Lego </h1>
    <p>
      A month old and weighing around a quarter kilogram, Lego is tiny yet fiercely brave soul looking for a family and home.
    </p>
    <a href="/adopt" id="Adopt">
      adopt me!
    </a>
    <div class="container row" id="Images">
      <img src="/adopt/lego/lego_basket.jpg" alt="lego sleeping on my desk" />
      <img src="/adopt/lego/lego_printer.jpg" alt="lego dozing off on a heated 3d printer bed" />
      <img src="/adopt/lego/lego_doze.jpg" alt="lego taking a nap during a photoshoot" />
    </div>
  </div>
</body>

<style>

p {
  text-align: center;
  margin: 10px;
}

#Adopt {
  border-radius: 5px;
  border: 1px solid var(--crust);
  background: linear-gradient(var(--pink), var(--red), var(--peach));
  color: var(--crust);
  margin-bottom: 10px;
  text-decoration: none;
  padding: 2px 5px;
}

#Contents {
  justify-content: center;
  align-items: center;
}

#Images {
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
 
#Images > img {
  border-radius: 5px;
  border: 1px solid var(--crust);
  height: 300px;
}

h1 {
  color: var(--peach);
  font-size: 18pt;
  margin-bottom: 0;
}

</style>


