# 💈 Barbearia Barba Rolling 💈

Esse é um projeto feito em [Next.js](https://nextjs.org) com a motivação de ser um projeto final para o processo de trainee da Empresa Júnior byron.solutions.

O repositório do projeto pode ser encontrado [aqui](https://github.com/PedroNB10/barber-shop-landing-page)

## 📱 Demonstração Visual do projeto

Link do site: [https://barber-shop-landing-page-jekcv5nch-pedronb10s-projects.vercel.app/schedule](https://barber-shop-landing-page-jekcv5nch-pedronb10s-projects.vercel.app/schedule)

<center>
  <img src="./readme-assets/responsividade.gif" alt="gif da animação do projeto">
</center>

## 💾 Para clonar o projeto use:

```
$ git clone https://github.com/PedroNB10/barber-shop-landing-page.git
```

## ⚙️ Configuração

Para que tenha o acesso a todas as funcionalidades do projeto como a de envio de formulário e autênticação com googleOAuth, renomeie o arquivo `.env.example` para `.env` e adicione as suas variáveis de ambiente:

```
NEXT_PUBLIC_PUBLIC_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_TEMPLATE_ID="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_SERVICE_ID="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_SUPABASE_URL="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_SUPABASE_ANON_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_URL_REDIRECT="http://localhost:3000/schedule/"
```

As primeiras 3 variáveis são da biblioteca [EmailJS](https://www.emailjs.com/) e as outras da biblioteca [Supabase](https://supabase.com/docs/guides/auth/auth-deep-dive/auth-google-oauth). Além disso é preciso criar um projeto no [Google Console](https://console.cloud.google.com/) para que use a API do Google Calendar. Segue um tutorioal de configuração desse um projeto google similar:

[https://youtu.be/tgcCl52EN84?si=474uufmQk-r6exQV](https://youtu.be/tgcCl52EN84?si=474uufmQk-r6exQV)

## 💿 Inicialização

Para acessar o projeto é necessário inicializá-lo em um server. Isso pode ser feito da seguinte forma:

```
npm run dev
# or
yarn dev
```

Após isso, basta abrir http://localhost:3000 no navegador para visualizar o resultado.

## 📝 Edição

A edição da página é feita pelo arquivo `app/page.tsx` e `app/layout.tsx`. A página será atualizada automaticamente para acompanhar as edições.

Para adição de páginas adicionais ou outras features é recomendado o uso da documentação do [Next.js](https://nextjs.org/docs)

## 🔧 Linguagens e Ferramentas

- [Next](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TS](https://www.typescriptlang.org/)
- [Supabase Google OAuth](https://supabase.com/docs/guides/auth/auth-deep-dive/auth-google-oauth)
- [HeroIcons](https://heroicons.com/)
- [FontAwesome](https://fontawesome.com/)
- [Sonner](https://sonner.emilkowal.ski/)
- [EmailJS](https://www.emailjs.com/)
- [Google Calendar API](https://developers.google.com/calendar/api/guides/overview?hl=pt-br)

## 👨🏻‍💻 Autores

- [Tomás Lavez](https://github.com/tomlavez)

- [Pedro Nogueira](https://github.com/PedroNB10)
