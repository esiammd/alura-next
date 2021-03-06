import Head from 'next/head'
import Link from '../src/components/Link'
import { Box } from '../src/theme/components';

export async function getStaticProps() {
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(FAQ_API_URL)
      .then((respostaDoServidor) => {
        return respostaDoServidor.json()
      }).then((resposta) => {
        return resposta
      })

  return {
    props: {
      qualquercoisa: 'que eu passar aqui',
      faq,
    }
  }
}

export default function FAQPage({ faq }) {
  return (
    <Box>
      <Head>
        <title>FAQ | Alura Cases Campanha</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <h1>Alura Cases - Página de perguntas</h1>
        <Link href="/">
            Ir para a Home
        </Link>
        <ul>
          {faq.map(({question, answer}, index) => (
            <li key={index}>
              <article>
                <h2>{question}</h2>
                <p>{answer}</p>
              </article>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}