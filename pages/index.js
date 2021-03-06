/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  // o nome padrao/ setar nome novo //
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground>
      <Head>
        <title>Haiquizz - Karasuno x Nekoma </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (submitThis) {
              submitThis.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo submisão por meio do react');
            }}
            >
              <input
                onChange={function (e) {
                  // eslint-disable-next-line no-unused-expressions
                  console.log(e.target.value);
                  // eslint-disable-next-line max-len
                  // state = uma propriedade que a gente modifica e decide o destino dela. é chamado do state tudo que a gente muda na tela //
                  setName(e.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        {/* // eslint-disable-next-line react/react-in-jsx-scope */}
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/hmriq" />
    </QuizBackground>
  );
}
