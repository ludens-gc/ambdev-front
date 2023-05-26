import "./style.css";
import makeRequest from "./src/makeRequest";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Entregável #2</h1>
    <div class="card">
      <h2>Algoritmo: CountInt</h2>
      <p>Conta quantos valores inteiros existem em um conjunto de dados.</p>
      <form id="form-countint">
        <input type="text" id="inputValue-countint" placeholder="Insira uma lista de números reais separados por espaço:" />
        <button type="button" id="jsButton-countint" data-algorithm="countint" language="javascript">Calcular</button>
        <button type="button" id="javaButton-countint" data-algorithm="countint" language="java">Calcular</button>
      </form>
      <div id="output-countint">Resultado: </div>
    </div>

    <div class="card">
      <h2>Algoritmo: CumSum</h2>
      <p>Soma de um conjunto de números.</p>
      <form id="form-cumsum">
        <input type="text" id="inputValue-cumsum" placeholder="Insira uma lista de números reais separados por espaço:" />
        <button type="button" id="jsButton-cumsum" data-algorithm="cumsum" language="javascript">Calcular</button>
        <button type="button" id="javaButton-cumsum" data-algorithm="cumsum" language="java">Calcular</button>
      </form>
      <div id="output-cumsum">Resultado: </div>
    </div>

    <div class="card">
      <h2>Algoritmo: Fibonacci</h2>
      <p>Exibe os N primeiros termos da sequência de fibonacci.</p>
      <form id="form-fibonacci">
        <input type="text" id="inputValue-fibonacci" placeholder="Insira o número de termos:" />
        <button type="button" id="jsButton-fibonacci" data-algorithm="fibonacci" language="javascript">Calcular</button>
        <button type="button" id="javaButton-fibonacci" data-algorithm="fibonacci" language="java">Calcular</button>
      </form>
      <div id="output-fibonacci">Resultado: </div>
    </div>

    <div class="card">
      <h2>Algoritmo: GCD</h2>
      <p>Indica qual é o máximo divisor comum entre 2 números.</p>
      <form id="form-gcd">
        <input type="text" id="inputValue-gcd" placeholder="Insira dois números naturais separados por espaço:" />
        <button type="button" id="jsButton-gcd" data-algorithm="gcd" language="javascript">Calcular</button>
        <button type="button" id="javaButton-gcd" data-algorithm="gcd" language="java">Calcular</button>
      </form>
      <div id="output-gcd">Resultado: </div>
    </div>

    <div class="card">
      <h2>Algoritmo: IsPrime</h2>
      <p>Indica se o número é primo ou não.</p>
      <form id="form-isprime">
        <input type="text" id="inputValue-isprime" placeholder="Insira um número natural:" />
        <button type="button" id="jsButton-isprime" data-algorithm="isprime" language="javascript">Calcular</button>
        <button type="button" id="javaButton-isprime" data-algorithm="isprime" language="java">Calcular</button>
      </form>
      <div id="output-isprime">Resultado: </div>
    </div>

    <div class="card">
      <h2>Algoritmo: QuickSort</h2>
      <p>Ordena um array usando o método Quicksort.</p>
      <form id="form-quicksort">
        <input type="text" id="inputValue-quicksort" placeholder="Insira uma lista de números reais separados por espaço:" />
        <button type="button" id="jsButton-quicksort" data-algorithm="quicksort" language="javascript">Calcular</button>
        <button type="button" id="javaButton-quicksort" data-algorithm="quicksort" language="java">Calcular</button>
      </form>
      <div id="output-quicksort">Resultado: </div>
    </div>
  </div>
`;

makeRequest(document.querySelector("#jsButton-countint"));
makeRequest(document.querySelector("#jsButton-cumsum"));
makeRequest(document.querySelector("#jsButton-fibonacci"));
makeRequest(document.querySelector("#jsButton-gcd"));
makeRequest(document.querySelector("#jsButton-isprime"));
makeRequest(document.querySelector("#jsButton-quicksort"));
makeRequest(document.querySelector("#javaButton-countint"));
makeRequest(document.querySelector("#javaButton-cumsum"));
makeRequest(document.querySelector("#javaButton-fibonacci"));
makeRequest(document.querySelector("#javaButton-gcd"));
makeRequest(document.querySelector("#javaButton-isprime"));
makeRequest(document.querySelector("#javaButton-quicksort"));
