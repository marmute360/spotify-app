# Spotify App

![Spotify Logo](https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg)

## Descrição

Este projeto é uma aplicação web desenvolvida em **Angular** que consome a **API do Spotify** para listar artistas, álbuns e músicas, além de exibir novos lançamentos. A aplicação apresenta destaque para os banners de artistas e álbuns, listagem de tracks com ícones de play, e navegação intuitiva.

O app foi criado com foco em:
- **Visualização:** banners com overlay e efeitos.
- **Responsividade:** adaptação entre desktop e mobile.
- **Experiência do usuário:** indicadores de loading, mensagens de feedback e navegação simples.

---

## Funcionalidades

- Listagem de artistas populares com filtros por popularidade e presença de imagem.
- Visualização detalhada do artista, incluindo seguidores, gêneros e lista de álbuns.
- Detalhes do álbum com banner, informações e listagem de faixas.
- Reprodução de tracks diretamente no Spotify através de links externos.
- Listagem de **New Releases**, navegando para detalhes do álbum.
- Sistema de loading centralizado com **Spinner** baseado em Observable.
- Botões de "Carregar mais" com comportamento fluido, mantendo itens já carregados.
- Navegação com header fixo, incluindo links para Home e New Releases.
- Layout moderno com CSS BEM, gradientes e efeitos de hover.

---

## Tecnologias Utilizadas

- **Framework:** Angular 19 (standalone e modules)
- **Linguagens:** TypeScript, SCSS, HTML
- **HTTP & API:** HttpClient, Spotify Web API
- **Testes:** Karma e Jasmine
- **State Management:** BehaviorSubject via PagesPresenter
- **Controle de autenticação:** AuthService com token armazenado em sessionStorage
- **Design:** CSS BEM, responsivo, efeitos visuais em banners e cards

---

## **Passos para Rodar a Aplicação**

### **Pré-requisitos**
Antes de começar, é necessário ter o **Node.js** instalado na sua máquina. Você pode verificar se o Node.js está instalado rodando o comando:

```bash
node -v
```
**obs**: Foi utilizado a versão `v20.10.0`
## 1. Clonar o Repositório

  Clone este repositório para sua máquina local:
```bash
git clone git@github.com:marmute360/spotify-app.git 
```
## 2. Instalar as Dependências

  Navegue até o diretório do projeto e instale as dependências do Node.js:
```bash
cd seu-repositorio
npm install
```

## 3. Rodar a Aplicação

  Depois de instalar as dependências, você pode rodar a aplicação localmente com o seguinte comando:
```bash
ng serve
```

**A aplicação estará disponível em http://localhost:4200/.**

## Testes

Este projeto inclui testes automatizados utilizando Jasmine e Karma.

Rodar os Testes

Para rodar os testes, execute o seguinte comando:
```bash
ng test
```

Isso irá abrir o Karma e rodar todos os testes do projeto.


## Deploy

Este projeto foi hospedado utilizando o Vercel. Você pode visualizar a aplicação no seguinte link:

**https://spotify-app-orcin-five.vercel.app/**


