import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Content from '../components/Content';
import './Main.css';
import CreditCardImg from '../img/creditcard2.png';
import CreditCardVersoImg from '../img/creditcardverso.png';
import SmartphoneImg from '../img/telefone.png';
import TopicsContent from '../components/TopicsContent';
import SimboloDollar from '../img/dollar-symbol.png';
import SimboloConta from '../img/custos-de-energia.png';
import SimboloCartao from '../img/credit-card.png';
import VantagensCard from '../components/VantagensCard';
import SimboloShoppingCart from '../img/shopping-cart.png';
import SimboloClock from '../img/clock.png';
import SimboloSeguranca from '../img/security.png';
import TestimonialsCard from '../components/TestimonialsCard';
import DownloadButton from '../components/DownloadButton';
import AppleLogo from '../img/apple-logo.png';
import AppleLogoGradient from '../img/apple-logo-gradient.png';
import PlaystoreLogo from '../img/google-play.png';
import PlaystoreLogoGradient from '../img/google-play-gradient.png';
import DoubtTopic from '../components/DoubtTopic';
import Logo from '../img/logo.png';
import ButtonOpenAccount from '../components/ButtonOpenAccount';

export default function Main() {
  let link = 'localhost:3000';

  function handleSubtitle(e) {
    let a = document.querySelector(`.${e}paragraph`);
    a.classList.toggle('noshow');
  }

  useEffect(() => {
    function AnimeScroll() {
      const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
      target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      });
    }

    window.addEventListener('scroll', function () {
      AnimeScroll();
    });

    const target = document.querySelectorAll('[dataanime]');
    const animationClass = 'animate';

    console.log(target);
  }, []);

  return (
    <div>
      <Header dataanime="scrollReveal1"></Header>
      <div className="flex conteudoprincipal justify-center items-center">
        <div className="conteudo-principal-esq flex flex-col items-center	justify-center">
          <div className="flex flex-col w-1/2 justify-center items-center conteudo-principal-esq-conteudo ">
            <h1 className="font-bold text-4xl text-blue-700 mb-4">
              Starbank<br></br>
              Banco 100% Digital
            </h1>
            <p className="font-semibold text-lg text-zinc-800">
              Abrir uma conta digital nunca foi tão simples!
            </p>
          </div>
          <div className="flex flex-row w-1/2 mt-12 justify-between items-center conteudo-principal-esq-botoes">
            <ButtonOpenAccount />
            <a href={link} className="w-10 zoomAnimation">
              <img src={AppleLogoGradient} alt="applelogogradient" />
            </a>
            <a href={link} className="w-8 zoomAnimation">
              <img src={PlaystoreLogoGradient} alt="applelogogradient" />
            </a>
          </div>
        </div>
        <div className="conteudo-principal-dir flex bg-gradient-to-r from-blue-700 to-cyan-500">
          <div className="flex flex-col  items-center justify-center">
            <div className="w-2/3 pr-36 pb-36 z-30 absolute ">
              <img
                src={CreditCardImg}
                className="drop-shadow-2xl ccard"
                alt="creditcard"
              />
            </div>
            <div className="w-2/3 pl-36 pt-36">
              <img
                src={CreditCardVersoImg}
                className="drop-shadow-2xl ccardverso"
                alt="creditcardverso"
              />
            </div>
          </div>
        </div>
      </div>
      <Content className="abrirconta" dataanime="scrollReveal3">
        <div className="flex flex-row mb-20 justify-center">
          <div className="flex mr-10 justify-center items-start   smartphone">
            <img
              src={SmartphoneImg}
              className=" smartphoneimg"
              alt="smartphone"
            />
          </div>
          <div className=" ">
            <h2 className="text-4xl font-bold text-left pb-2 ">
              Abra sua conta<br></br>
              <span className="text-blue-700">StarBank</span> gratuita!
            </h2>
            <p className="text-xl text-left font-light py-5 ">
              Envie e receba dinheiro de forma mais prática e rápida. Faça Pix,
              TEDs e transferências com agendamento para todos os bancos sem
              pagar nada.
            </p>
            <TopicsContent
              icon={SimboloDollar}
              title="Seu dinheiro rendendo mais"
              subtitle="Rendem mais que a poupança e você resgata quando quiser"
            ></TopicsContent>
            <TopicsContent
              icon={SimboloConta}
              title="Conta digital 100% grátis"
              subtitle="Transferências, boletos de depósito e outros serviços gratuitos"
            ></TopicsContent>
            <TopicsContent
              icon={SimboloCartao}
              title="Cartão sem anuidade"
              subtitle="Conta digital com cartão de crédito sem anuidade e sem complicação"
            ></TopicsContent>
          </div>
        </div>
      </Content>
      <Content
        fundo="bg-slate-100"
        className="vantagens "
        dataanime="scrollReveal4"
      >
        <h6 className="font-bold text-blue-700 mt-8		">#INOVAÇÃO</h6>
        <h2 className="text-4xl font-bold text-left pb-4 mb-4">
          Quais as vantagens<br></br>de usar o{' '}
          <span className="text-blue-700">StarBank</span>?
        </h2>
        <div className="flex vantagenscardgroup justify-center ">
          <VantagensCard
            img={SimboloCartao}
            title="Cartão StarBank"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia."
          ></VantagensCard>
          <VantagensCard
            img={SimboloShoppingCart}
            title="Investimentos"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia."
          ></VantagensCard>
          <VantagensCard
            img={SimboloClock}
            title="Atendimento 24h"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia."
          ></VantagensCard>
          <VantagensCard
            img={SimboloSeguranca}
            title="Segurança"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia."
          ></VantagensCard>
        </div>
        <div className="flex vantagenscardgroup justify-center mb-20">
          <VantagensCard
            img={SimboloCartao}
            title="Cartão StarBank"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia."
          ></VantagensCard>
          <VantagensCard
            img={SimboloShoppingCart}
            title="Investimentos"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia."
          ></VantagensCard>
          <VantagensCard
            img={SimboloClock}
            title="Atendimento 24h"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia."
          ></VantagensCard>
          <VantagensCard
            img={SimboloSeguranca}
            title="Segurança"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia."
          ></VantagensCard>
        </div>
      </Content>
      <Content className="depoimentos " dataanime="scrollReveal5">
        <h6 className="font-bold text-blue-700 mt-40 depoimentosh6		">
          #DEPOIMENTOS
        </h6>
        <h2 className="text-4xl font-bold text-left ">
          <span className="text-blue-700">StarBank</span> fora das telinhas:
        </h2>
        <h3 className=" text-2xl mb-20">
          Veja o que falam sobre nosso serviço.
        </h3>
        <div className="flex justify-center testimonialgroup">
          <TestimonialsCard
            title="Nikola Tesla"
            subtitle="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”"
          ></TestimonialsCard>
          <TestimonialsCard
            title="Nikola Tesla"
            subtitle="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”"
          ></TestimonialsCard>
          <TestimonialsCard
            title="Nikola Tesla"
            subtitle="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”"
          ></TestimonialsCard>
        </div>
      </Content>
      <Content
        fundo="bg-slate-100"
        className="download "
        dataanime="scrollReveal6"
      >
        <div className="flex  justify-between mt-40 downloaddiv">
          <div>
            <h2 className="text-4xl font-bold text-left mb-10 ">
              Uma nova experiência<br></br>
              em <span className="text-blue-700">serviços financeiros.</span>
              <br></br>
              Somos digital. Somos StarBank.
            </h2>
            <h3 className="text-md mb-4">
              Donec venenatis at turpis at ornare. <br></br>Pellentesque a quam
              vel dui lacinia dapibus in sit amet dolor.
            </h3>
            <div className="flex downloadbuttongroup">
              <DownloadButton
                img={AppleLogo}
                subtitle="Apple Store"
              ></DownloadButton>
              <DownloadButton
                img={PlaystoreLogo}
                subtitle="Google Play"
              ></DownloadButton>
            </div>
          </div>
          <div className="w-2/3 sectiondownloadimglogo">
            <a href={link}>
              <img src={Logo} alt="" />
            </a>
          </div>
        </div>
      </Content>
      <Content
        fundo="bg-slate-50"
        className="duvidas "
        dataanime="scrollReveal7"
      >
        <h6 className="font-bold text-blue-700 text-center mt-12		">#AJUDA</h6>
        <h2 className="text-4xl font-bold text-center pb-4 mb-4">
          Ficou alguma dúvida?
        </h2>
        <div className="flex flex-col items-center justify-center">
          <DoubtTopic
            img={SimboloCartao}
            title="Posso cancelar a qualquer momento?"
            subtitle="Sim. Basta clicar no botão 'Chat Online' no nosso aplicativo e solicitar o cancelamento com um de nossos atendentes!"
            className="cancelamento"
            onArrowClick={handleSubtitle}
          ></DoubtTopic>
          <DoubtTopic
            img={SimboloDollar}
            title="Tem algum custo ou tarifas escondidas?"
            subtitle="No StarBank você não paga nada para manter sua conta ativa, clique e veja a tarifa para cada serviço realizado."
            className="custos"
            onArrowClick={handleSubtitle}
          ></DoubtTopic>
          <DoubtTopic
            img={SimboloClock}
            title="Quanto tempo leva para abrir minha conta?"
            subtitle="Você pode abrir e receber transferências em sua conta em menos de 60 minutos. Para sua conta estar 100% demora menos de 24h."
            className="tempo"
            onArrowClick={handleSubtitle}
          ></DoubtTopic>
        </div>
      </Content>
      <Footer className="footer scrollReveal8"></Footer>
    </div>
  );
}
