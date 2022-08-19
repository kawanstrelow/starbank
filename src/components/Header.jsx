import React, { useEffect } from 'react';
import Logo from '../img/logo.png';
import Button from './Button';
import SetaParaBaixoImg from '../img/seta-para-baixo.png';
import './Header.css';

export default function Header(props) {
  useEffect(() => {
    let StarBankLink = document.querySelector('.starbankid');
    let ContaDigitalLink = document.querySelector('.contadigitalid');
    let menuToggleGroup = document.querySelector('.menu-mobile');

    if (StarBankLink !== null) {
      StarBankLink.addEventListener('mouseover', incluirClasseStarbank);
      StarBankLink.addEventListener('mouseout', removerClasseStarbank);
    }

    if (ContaDigitalLink !== null) {
      ContaDigitalLink.addEventListener('mouseover', incluirClasseContaDigital);
      ContaDigitalLink.addEventListener('mouseout', removerClasseContaDigital);
    }

    if (menuToggleGroup !== null) {
      menuToggleGroup.addEventListener('click', toggleShowMenu);
    }
  }, []);

  function incluirClasseStarbank() {
    let a = document.querySelector('.menu-dropdown-starbankid');
    a.classList.remove('noshow');
  }

  function removerClasseStarbank() {
    let a = document.querySelector('.menu-dropdown-starbankid');
    a.classList.add('noshow');
  }

  function incluirClasseContaDigital() {
    let a = document.querySelector('.menu-dropdown-contadigitalid');
    a.classList.remove('noshow');
  }

  function removerClasseContaDigital() {
    let a = document.querySelector('.menu-dropdown-contadigitalid');
    a.classList.add('noshow');
  }

  function toggleShowMenu() {
    let a = document.querySelector('.menu-mobile-full');
    a.classList.toggle('noshow');
  }

  return (
    <header
      className={`flex w-full h-full justify-center  px-72 py-4 header ${props.className}`}
      dataanime={`${props.dataanime}`}
    >
      <nav className="flex justify-evenly items-center">
        <div className="flex justify-start align-middle text-center ">
          <a href="#" className="w-16">
            <img src={Logo} alt="logo"></img>
          </a>
          <ul className="flex w-80 ulmenu">
            <div className="flex flex-col justify-center items-center starbankid">
              <li className="ml-2 my-auto flex justify-center items-center text-zinc-800	font-medium	text-md	navlist">
                StarBank
                <img className="w-5 h-5 ml-2 " src={SetaParaBaixoImg} alt="" />
              </li>
              <div className="bg-blue-700 w-48 rounded-b-lg menu-dropdown-starbankid noshow">
                <ul className="text-white">
                  <a href="#">
                    <li className="p-1 border-b-2">Newsletter</li>
                  </a>
                  <a href="#">
                    <li className="p-1">Blog</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center contadigitalid">
              <li className=" my-auto flex justify-center items-center text-zinc-800	font-medium	text-md	navlist">
                Conta Digital
                <img className="w-5 h-5 ml-2" src={SetaParaBaixoImg} alt="" />
              </li>
              <div className="bg-blue-700 w-48 rounded-b-lg menu-dropdown-contadigitalid noshow">
                <ul className="text-white">
                  <a href="#">
                    <li className="p-1 border-b-2">Criar sua conta</li>
                  </a>
                  <a href="#">
                    <li className="p-1 border-b-2">Rendimento</li>
                  </a>
                  <a href="#">
                    <li className="p-1">Taxas</li>
                  </a>
                </ul>
              </div>
            </div>
          </ul>
        </div>
        <Button className="flex justify-end m-auto loginbutton">Login</Button>
        <div className="menu-mobile noshow">
          <div className="trace"></div>
          <div className="trace"></div>
          <div className="trace"></div>
        </div>
      </nav>
      <div className="menu-mobile-full noshow">
        <ul className="text-white text-center text-3xl mt-2">
          <a href="#">
            <li className="p-1 border-b-2">Newsletter</li>
          </a>
          <a href="#">
            <li className="p-1 border-b-2">Blog</li>
          </a>
          <a href="#">
            <li className="p-1 border-b-2">Criar sua conta</li>
          </a>
          <a href="#">
            <li className="p-1 border-b-2">Rendimento</li>
          </a>
          <a href="#">
            <li className="p-1 border-b-2">Taxas</li>
          </a>
        </ul>
      </div>
    </header>
  );
}
