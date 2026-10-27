# Libra Elevadores - Website Oficial

Website institucional moderno, rápido, responsivo e com SEO otimizado para a **Libra Elevadores**.

---

## 🏢 Sobre a Empresa

- **Empresa:** Libra Elevadores
- **Instagram:** [@libraelevadores](https://www.instagram.com/libraelevadores/)
- **WhatsApp:** [+55 (44) 99975-2255](https://wa.me/5544999752255?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Libra%20Elevadores.)
- **Telefone:** [(44) 3039-0900](tel:+554430390900)
- **E-mail:** [libra@libraelevadores.com.br](mailto:libra@libraelevadores.com.br)
- **Localização:** Avenida Industrial, 39 – Parque das Indústrias, Japurá – PR, 87220-000

---

## 🚀 Como Executar Localmente

### Opção 1: Direto no Navegador
Você pode simplesmente dar dois cliques no arquivo `index.html` para abrir diretamente no seu navegador de preferência.

### Opção 2: Servidor Local (Node.js)
Abra o terminal na pasta do projeto e execute:
```bash
node serve.js
```
Ou usando npm:
```bash
npm start
```
Acesse no navegador: `http://localhost:3000`

---

## 📁 Estrutura de Arquivos

```
Site libra elevadores/
├── assets/
│   ├── favicon.png          # Ícone de favoritos
│   ├── hero.jpg             # Imagem do banner principal e quem somos
│   ├── logo.png             # Logotipo em alta resolução (PNG transparente)
│   ├── og-image.png         # Imagem para compartilhamento em redes sociais
│   ├── styles.css           # Estilos completos e responsivos (Tailwind CSS)
│   └── main.js              # Animações de scroll, menu mobile e roteamento rápido
├── contato/
│   └── index.html           # Página de contato (/contato)
├── produtos/
│   └── index.html           # Página de produtos (/produtos)
├── quem-somos/
│   └── index.html           # Página de quem somos (/quem-somos)
├── servicos/
│   └── index.html           # Página de serviços (/servicos)
├── .htaccess                # Configuração para Apache / cPanel (URLs limpas e cache)
├── _headers                 # Configuração de cabeçalhos de segurança e cache
├── _redirects               # Redirecionamentos para Netlify / Cloudflare Pages
├── contato.html             # Página de contato direta
├── index.html               # Página inicial
├── package.json             # Metadados e scripts do projeto
├── produtos.html            # Página de produtos direta
├── quem-somos.html          # Página quem somos direta
├── robots.txt               # Instruções para robôs de busca (Google, Bing)
├── serve.js                 # Servidor local de desenvolvimento
├── servicos.html            # Página de serviços direta
├── sitemap.xml              # Mapa do site para indexação no Google
└── vercel.json              # Configuração para deploy na Vercel
```

---

## 🌐 Publicação e Hospedagem

O site está 100% pronto para publicação em qualquer plataforma:
- **Vercel**: Basta conectar o repositório ou arrastar a pasta. As URLs limpas e regras de cache já estão configuradas no `vercel.json`.
- **Netlify / Cloudflare Pages**: Arquivos `_redirects` e `_headers` já inclusos.
- **cPanel / Hospedagem Tradicional (Apache)**: Arquivo `.htaccess` já pronto para URLs limpas e compressão Gzip.
- **GitHub Pages**: Funciona diretamente com as páginas HTML estáticas.

---

## ⚡ Destaques Técnicos

1. **Leve e Ultra Rápido**: Sem dependências pesadas em tempo de execução, carregamento instantâneo.
2. **Design 100% Fiel**: Tipografia Manrope e Sora, paleta de cores corporativa da Libra Elevadores e sombras suaves.
3. **Animações Suaves**: Animações de entrada com `IntersectionObserver` idênticas ao projeto de referência.
4. **100% Responsivo**: Layout otimizado para celulares, tablets e desktops com menu mobile interativo.
5. **SEO & Dados Estruturados**: Meta tags completas Open Graph, Twitter Cards e dados estruturados Schema.org (`LocalBusiness`).
6. **Integração WhatsApp**: Botão flutuante pulsante e links direcionados para atendimento imediato.
