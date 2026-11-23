const fs = require('fs');
const products = require('./products_data.js');

// 1. Generate Products Grid for index.html
function getIndexProductsSection() {
  const cards = products.map((prod, idx) => {
    const delay = (idx % 3) * 80;
    return `
      <div class="h-full transition-all duration-700 ease-out will-change-transform translate-y-6 opacity-0" style="transition-delay:${delay}ms">
        <a href="${prod.slug}.html" data-route="/produtos/${prod.slug}" class="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
          <div class="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <img src="./${prod.image}" alt="${prod.name} - Libra Elevadores" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
            <span class="absolute top-3 right-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">Ver detalhes</span>
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">${prod.name}</h3>
            <p class="mt-2 text-sm text-muted-foreground flex-1 leading-relaxed">${prod.shortDesc}</p>
            <div class="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-primary">
              <span>Mais informações</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
        </a>
      </div>
    `;
  }).join('\n');

  return `<section class="mx-auto max-w-7xl px-6 py-20">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="font-semibold text-primary">Produtos</p>
        <h2 class="mt-2 text-3xl font-bold md:text-4xl">Soluções para cada tipo de edificação</h2>
      </div>
      <a class="flex items-center gap-2 font-semibold text-primary hover:underline" href="produtos.html" data-route="/produtos">
        Todos os produtos 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </a>
    </div>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${cards}
    </div>
  </section>`;
}

// 2. Generate Products Grid for produtos.html
function getProdutosGridSection(depth = 0) {
  const rel = depth === 0 ? './' : '../';
  
  const cards = products.map((prod, idx) => {
    const delay = (idx % 3) * 80;
    const bulletsHtml = prod.bullets.map(b => `
      <li class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
        <span>${b}</span>
      </li>
    `).join('\n');

    const prodLink = depth === 0 ? `${prod.slug}.html` : `${prod.slug}.html`;

    return `
      <div class="h-full transition-all duration-700 ease-out will-change-transform translate-y-6 opacity-0" style="transition-delay:${delay}ms">
        <article class="flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
          <div class="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <a href="${prodLink}" data-route="/produtos/${prod.slug}" class="block h-full w-full">
              <img src="${rel}${prod.image}" alt="${prod.name} - Libra Elevadores" loading="lazy" class="h-full w-full object-cover transition duration-500 hover:scale-105">
            </a>
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h2 class="text-xl font-bold font-display text-foreground hover:text-primary transition">
              <a href="${prodLink}" data-route="/produtos/${prod.slug}">${prod.name}</a>
            </h2>
            <p class="mt-2 text-sm text-muted-foreground leading-relaxed">${prod.shortDesc}</p>
            <ul class="mt-4 space-y-2 text-xs text-foreground/80">
              ${bulletsHtml}
            </ul>
            <div class="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border mt-auto">
              <a href="${prodLink}" data-route="/produtos/${prod.slug}" class="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow transition hover:brightness-110">
                Mais informações
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href="https://wa.me/5544999752255?text=${prod.waText}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-whatsapp hover:underline ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                Orçamento
              </a>
            </div>
          </div>
        </article>
      </div>
    `;
  }).join('\n');

  return `<section class="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
    ${cards}
  </section>`;
}

// 3. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
const indexSecStart = indexHtml.indexOf('<section class="mx-auto max-w-7xl px-6 py-20"><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="font-semibold text-primary">Produtos</p>');
const indexSecEnd = indexHtml.indexOf('</section>', indexSecStart) + 10;
if (indexSecStart !== -1) {
  indexHtml = indexHtml.substring(0, indexSecStart) + getIndexProductsSection() + indexHtml.substring(indexSecEnd);
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('Updated products section in index.html');
} else {
  console.error('Could not find products section in index.html');
}

// 4. Update produtos.html
let prodHtml = fs.readFileSync('produtos.html', 'utf8');
const prodSecStart = prodHtml.indexOf('<section class="mx-auto grid max-w-7xl gap-6');
const prodSecEnd = prodHtml.indexOf('</section>', prodSecStart) + 10;
if (prodSecStart !== -1) {
  prodHtml = prodHtml.substring(0, prodSecStart) + getProdutosGridSection(0) + prodHtml.substring(prodSecEnd);
  fs.writeFileSync('produtos.html', prodHtml, 'utf8');
  console.log('Updated products grid in produtos.html');
} else {
  console.error('Could not find products grid in produtos.html');
}

// 5. Update produtos/index.html
if (fs.existsSync('produtos/index.html')) {
  let nestedProdHtml = fs.readFileSync('produtos/index.html', 'utf8');
  const nestedSecStart = nestedProdHtml.indexOf('<section class="mx-auto grid max-w-7xl gap-6');
  const nestedSecEnd = nestedProdHtml.indexOf('</section>', nestedSecStart) + 10;
  if (nestedSecStart !== -1) {
    nestedProdHtml = nestedProdHtml.substring(0, nestedSecStart) + getProdutosGridSection(1) + nestedProdHtml.substring(nestedSecEnd);
    fs.writeFileSync('produtos/index.html', nestedProdHtml, 'utf8');
    console.log('Updated products grid in produtos/index.html');
  } else {
    console.error('Could not find products grid in produtos/index.html');
  }
}
